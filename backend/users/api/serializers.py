import re

from django.contrib.auth import get_user_model
from rest_framework import serializers
from users.models import SocialAccount, UserProfile

User = get_user_model()


class SocialAccountSerializer(serializers.ModelSerializer):
    link = serializers.SerializerMethodField()

    class Meta:
        model = SocialAccount
        exclude = ("is_email", "user")

    @staticmethod
    def get_link(model):
        """
        Checks `is_email` flag and convert link url to email `mailto` link.
        Returns: is_email --> `mailto` link
                 (default <model>.link)
        """
        schemas = r"(https?|ftps):\/\/"
        if model.is_email:
            return "mailto:" + re.sub(schemas, "", model.link)
        return model.link


class UserProfilePartialSerializer(serializers.ModelSerializer):
    """Partial Serializer for UserProfile"""

    # user = serializers.CharField(source="user.username",read_only=True)

    class Meta:
        model = UserProfile
        fields = (
            "id",
            "avatar",
            "description",
            "user",
        )


class UserProfileFullSerializer(serializers.ModelSerializer):
    social_account = SocialAccountSerializer(source="user.social_account", many=True, default=[], read_only=True)

    class Meta:
        model = UserProfile
        fields = ("id", "avatar", "description", "user", "social_account")
        read_only_fields = ("social_account",)


class UserSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(style={"input_type": "password"})
    profile = UserProfileFullSerializer(source="userprofile", read_only=True)
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "full_name",
            "profile",
        )

    @staticmethod
    def get_full_name(obj):
        return obj.get_full_name()

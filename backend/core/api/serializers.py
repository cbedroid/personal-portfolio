from rest_framework import serializers

from ..models import Project, Resume, Skill, Technology

# Retrieve field name from a Model
get_model_fields = lambda model: [x.name for x in model._meta.fields]  # noqa: E731


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = "__all__"

    technology = TechnologySerializer(many=True, read_only=True)


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = (
            "id",
            "url",
            "user",
            "username",
            "created_at",
            "updated_at",
        )

    username = serializers.CharField(source="user.username")

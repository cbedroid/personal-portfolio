from django.contrib.auth import get_user_model
from django_filters import rest_framework as filters
from users.models import UserProfile

User = get_user_model()


class CharInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class UserFilter(filters.FilterSet):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
        )

    username = filters.CharFilter(
        lookup_expr="icontains", field_name="username", label="an iexact search on a username."
    )
    first_name = filters.CharFilter(
        lookup_expr="icontains", field_name="first_name", label="an iexact search on a user's first name."
    )
    last_name = filters.CharFilter(
        lookup_expr="icontains", field_name="last_name", label="an iexact search on a user's last name."
    )


class UserProfileFilter(filters.FilterSet):
    class Meta:
        model = UserProfile
        fields = ("id", "username")

    username = filters.CharFilter(
        lookup_expr="icontains", field_name="user__username", label="an iexact search on a username."
    )

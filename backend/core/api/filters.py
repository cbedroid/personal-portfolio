from core.models import Project, Resume, Skill, Technology
from django.contrib.auth import get_user_model
from django_filters import rest_framework as filters

User = get_user_model()


class CharInFilter(filters.BaseInFilter, filters.CharFilter):
    pass


class SkillFilter(filters.FilterSet):
    class Meta:
        model = Skill
        fields = (
            "id",
            "title",
            "experience",
        )

    title = filters.CharFilter(
        lookup_expr="icontains", field_name="title", label="an iexact search on a title of Skill."
    )


class TechnologyFilter(filters.FilterSet):
    class Meta:
        model = Technology
        fields = (
            "id",
            "name",
        )

    name = filters.CharFilter(lookup_expr="icontains", field_name="name", label="an iexact search on a mame of Skill.")


class ProjectFilter(filters.FilterSet):
    class Meta:
        model = Project
        fields = ("id", "name", "technology")

    name = filters.CharFilter(
        lookup_expr="icontains", field_name="name", label="an iexact search on a mame of Project."
    )

    technology = CharInFilter(
        lookup_expr="in", field_name="technology__name", label="Classification of type of technology in Project."
    )


class ResumeFilter(filters.FilterSet):
    class Meta:
        model = Resume
        fields = "__all__"

    username = filters.CharFilter(
        lookup_expr="icontains", field_name="user__username", label="an iexact search on a username."
    )

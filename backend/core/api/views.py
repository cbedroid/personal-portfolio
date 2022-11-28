from django_filters import rest_framework as filters
from rest_framework import viewsets

from ..models import Project, Resume, Skill, Technology
from .filters import ProjectFilter, ResumeFilter, SkillFilter, TechnologyFilter
from .pagination import VerbosePagination
from .permissions import CanReadDashboard
from .serializers import (
    ProjectSerializer,
    ResumeSerializer,
    SkillSerializer,
    TechnologySerializer,
)


class SkillView(viewsets.ModelViewSet):
    permission_classes = [CanReadDashboard]
    serializer_class = SkillSerializer
    pagination_class = VerbosePagination
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = SkillFilter

    queryset = Skill.objects.all()


class TechnologyView(viewsets.ModelViewSet):
    permission_classes = [CanReadDashboard]
    serializer_class = TechnologySerializer
    pagination_class = VerbosePagination
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = TechnologyFilter

    queryset = Technology.objects.all()


class ProjectView(viewsets.ModelViewSet):
    permission_classes = [CanReadDashboard]
    serializer_class = ProjectSerializer
    pagination_class = VerbosePagination
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProjectFilter

    queryset = Project.objects.all()


class ResumeView(viewsets.ModelViewSet):
    permission_classes = [CanReadDashboard]
    serializer_class = ResumeSerializer
    pagination_class = VerbosePagination
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ResumeFilter

    queryset = Resume.objects.all()

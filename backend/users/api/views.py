from core.api.pagination import VerbosePagination
from core.api.permissions import CanReadDashboard
from django.contrib.auth import get_user_model
from django_filters import rest_framework as filters
from rest_framework import status, viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from ..models import UserProfile
from .filters import UserFilter, UserProfileFilter
from .serializers import (
    UserProfileFullSerializer,
    UserProfilePartialSerializer,
    UserSerializer,
)

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    pagination_class = VerbosePagination
    permission_classes = [CanReadDashboard]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = UserFilter
    queryset = User.objects.all()


class UserProfileViewSet(viewsets.ModelViewSet):
    # serializer_class = UserProfilePartialSerializer
    pagination_class = VerbosePagination
    permission_classes = [CanReadDashboard]
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = UserProfileFilter
    queryset = UserProfile.objects.all()

    def get_serializer_class(self):
        if self.request.method == "GET":
            return UserProfileFullSerializer
        return UserProfilePartialSerializer


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:  # noqa
            return Response(status=status.HTTP_400_BAD_REQUEST)

from core.api.views import ProjectView, ResumeView, SkillView, TechnologyView
from django.conf import settings
from django.urls import path
from rest_framework.routers import DefaultRouter, SimpleRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from users.api.views import SocialAccountViewSet, UserProfileViewSet, UserViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

# users api urls
router.register("users", UserViewSet, basename="user")
router.register("userprofiles", UserProfileViewSet, basename="userprofile")
router.register("social_accounts", SocialAccountViewSet, basename="social_account")

# core api url
router.register("projects", ProjectView, basename="project")
router.register("technology", TechnologyView, basename="tech")
router.register("skills", SkillView, basename="skill")
router.register("resumes", ResumeView, basename="resume")

app_name = "api"
urlpatterns = router.urls
urlpatterns += [
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, re_path

# Admin  urls
# protect admin url in production
if settings.DEBUG:
    admin_urls = [
        re_path(r"^admin/", admin.site.urls),
    ]
else:
    admin_urls = [
        re_path(r"^admin/", include("admin_honeypot.urls", namespace="admin_honeypot")),
        re_path(rf"^{settings.ADMIN_URL.lstrip('/')}/", admin.site.urls),
    ]

# Apps Api urls
api_urls = [
    re_path("api-auth/", include("rest_framework.urls")),
    re_path(r"^api/", include("api.api_router")),
]

# App base urls
static_urls = static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
static_urls += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

base_urls = api_urls + []

urlpatterns = admin_urls + base_urls + static_urls

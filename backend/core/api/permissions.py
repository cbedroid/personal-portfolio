from rest_framework import permissions

__all__ = ["CanReadDashboard"]


class CanReadDashboard(permissions.BasePermission):
    message = "You do not have permission to read this Dashboard."

    # https://docs.djangoproject.com/en/4.1/topics/auth/default/
    def has_permission(self, request, view):
        """
        API permission method that restrict access for unauthorized users.
         Restricted method:
            `create`,
            `update`,
            'delete` (CUD) method.

        Allow methods: `Retrieve` - GET methods
        """

        """
        Only allow `client`(react) access to api through `AJAX` requests.
        This prevents users from accessing api interface in their browser.
        See: frontend/src/api for axios headers.
       """
        if (
            request.method in ["GET", "HEAD"]
            and request.META.get("HTTP_X_REQUESTED_WITH") == "XMLHttpRequest"
        ):
            return True

        if request.user.is_superuser:
            return True

        if request.user.is_staff:
            return True

        if request.user.groups.filter(name="core_access").exists():
            return True

        if request.user.has_perm("core.view_project"):
            return True

        return False

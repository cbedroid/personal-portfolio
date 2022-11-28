from django.contrib.auth import get_user_model
from rest_framework import permissions

User = get_user_model()


class IsAdminOrOwner(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        # Write permissions are only allowed to the owner of the snippet.

        return obj == request.user or request.user.is_staff

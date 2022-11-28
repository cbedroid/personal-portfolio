from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.html import mark_safe

from .models import SocialAccount, User, UserProfile


class UserAdmin(UserAdmin):
    # inlines = [TokenInline]
    readonly_fields = ("auth_token", "password")
    list_display = ["username", "email"]

    @admin.display(description="auth_token")
    def auth_token(self, obj):
        return obj.auth_token


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ["avatar_preview", "username"]

    def username(self, obj):
        return obj.user.username

    def avatar_preview(self, obj):
        image = (
            obj.avatar or "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif"
        )
        return mark_safe(f'<img src="{image}" width=60 height=55/>')


admin.site.register(SocialAccount)
admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(User, UserAdmin)

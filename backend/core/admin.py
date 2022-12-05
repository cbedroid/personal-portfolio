from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import Project, Resume, Skill, Technology


class TechnologyAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "image_preview",
    )

    @staticmethod
    def image_preview(obj):
        return mark_safe(f'<img src="{obj.image}" width=35 height=35/>')


class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "video_preview",
    )
    filter_horizontal = ("technology",)

    @staticmethod
    def video_preview(obj):
        return mark_safe(
            f'<video src="{obj.video}" width=100 height=135 autoplay muted/>'
        )


admin.site.register(Skill)
admin.site.register(Resume)
admin.site.register(Technology, TechnologyAdmin)
admin.site.register(Project, ProjectAdmin)

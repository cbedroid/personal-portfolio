from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext_lazy as _

User = get_user_model()


class Skill(models.Model):
    title = models.CharField(max_length=20)
    experience = models.PositiveIntegerField(help_text=_("Number of years of experience"))
    rate = models.PositiveIntegerField(help_text=_("Experience level from 0 - 100"), default=25)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username} - {self.title}: {self.experience} yr(s)"


class Technology(models.Model):
    name = models.CharField(
        max_length=20,
        unique=True,
        help_text=_("Programming Languages, technologies...etc"),
    )
    image = models.URLField(help_text=_("Technology image url"), blank=True)
    link = models.URLField(help_text=_("Technology website url"), blank=True)

    class Meta:
        verbose_name_plural = "technologies"

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=40, unique=True)
    description = models.TextField(max_length=800)
    technology = models.ManyToManyField(Technology, related_name="project")
    video = models.URLField(help_text=_("Video preview link for project"))
    link = models.URLField(help_text=_("Project's website link"), blank=True)

    def __str__(self):
        return self.name


class Resume(models.Model):
    url = models.URLField(blank=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now=False, auto_now_add=True)
    updated_at = models.DateField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return f"{self.user.username}'s Resume"

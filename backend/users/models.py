import uuid

from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models
from django.utils.translation import gettext_lazy as _
from simple_history import register


class User(AbstractUser):
    REQUIRED_FIELDS = ["email"]

    class Meta:
        ordering = ["last_name"]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, unique=True, editable=False)

    def __str__(self):
        full_name = self.get_full_name()
        if full_name:
            return f"{self.username}: {full_name}"
        return self.username


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.URLField(
        help_text=_("Avatar url. (not required)"),
        null=True,
        default="https://github.com/cbedroid/personal-portfolio/raw/docs-storage/content/images/default_avatar.webp",
    )
    description = models.TextField(max_length=1000, default="User profile description")


URL_VALIDATOR = RegexValidator(regex=r"^(https?:\/\/|mailto\:).*\.(com|org|net)\.*$/", message="Enter a valid URL")


class SocialAccount(models.Model):
    title = models.CharField(max_length=60, blank=False, null=False)
    link = models.URLField(blank=False, null=False)
    icon = models.CharField(max_length=40, blank=True, null=True, help_text=_("Font Awesome v5 icon link. (Optional)"))
    user = models.ForeignKey(User, related_name="social_account", on_delete=models.CASCADE)

    is_email = models.BooleanField(default=False, help_text=_("Whether link is an email link"))

    def save(self, *args, **kwargs):
        self.title = self.title.title()
        return super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.user.username} {self.title}"


# ********************************#
# ---TRACK CHANGES IN MODELS --- #
# ********************************#

register(User)

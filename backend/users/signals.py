import logging

from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from users.models import UserProfile

logger = logging.getLogger(__name__)

User = get_user_model()


@receiver(post_save, sender=User)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        # check if user has a user profile
        _, profile_created = UserProfile.objects.get_or_create(user=instance)
        if profile_created:
            logger.info("User profile created")

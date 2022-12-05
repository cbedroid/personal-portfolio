"""
AllAuth is not current used as of Nov 10, 2022
"""
import logging

from allauth.account.adapter import DefaultAccountAdapter
from django.conf import settings
from django.contrib.auth import get_user_model

logger = logging.getLogger(__name__)
User = get_user_model()


class AccountAdapter(DefaultAccountAdapter):
    def is_open_for_signup(self, request):
        return getattr(settings, "ACCOUNT_ALLOW_REGISTRATION", True)

    def confirm_email(self, request, email_address):
        # Set account_verified status on User
        try:
            user = User.objects.get(email=email_address)
            user.account_verified = True
            user.save()
        except User.DoesNotExist:
            logger.exception("Unknown User - Account Email Verificaton Failed ")
        except Exception:
            logger.exception("Account Email Verificaton Failed ")

        return super().confirm_email(request, email_address)

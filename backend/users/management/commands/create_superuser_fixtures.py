import os
import re
import sys

from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

User = get_user_model()


class Command(BaseCommand):
    """
    This Command updates the project fixtures by modifying the projects existing
    fixture user's uuid field (pk) to match the existing superuser uuid.
    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def add_arguments(self, parser):
        parser.add_argument(
            "--env_prefix",
            type=str,
            nargs="?",
            default="REACT_APP_API_TOKEN",
            help="React environment variable prefix. e.g. `REACT_APP_<variable>`",
        )

    def handle(self, *args, **options):
        fixtures = [
            "core/fixtures/core.json",
            "users/fixtures/userprofile.json",
            "users/fixtures/social_account.json",
        ]

        base_dir = settings.BASE_DIR

        users = User.objects.filter(
            username=os.environ.get("DJANGO_SUPERUSER_USERNAME")
        )
        if not users.exists():
            self.stdout.write(
                self.style.ERROR(
                    "Superuser `username`  was not specified. Please specify a superuser"
                )
            )
            sys.exit(1)

        superuser = users.first()
        superuser_uuid = str(superuser.id)

        for fixture in fixtures:
            basename = os.path.basename(fixture)
            filename = os.path.join(base_dir, fixture)

            if not os.path.exists(filename):
                self.stdout.write(
                    self.style.WARNING(f"Skipped {filename}"), ending="\n"
                )
                continue

            with open(filename, "r+") as f:
                # Changed fixture `user` uuid to new superusers uuid
                original_content = f.read()
                original_content = re.sub(
                    r'"user": ".*"', f'"user": "{superuser_uuid}"', original_content
                )
                f.seek(0)  # go to the beginning of file
                f.write(original_content)

                self.stdout.write(
                    self.style.SUCCESS(f"Successfully changed {basename} users"),
                    ending="\n",
                )

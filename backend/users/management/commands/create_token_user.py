import os
import traceback

from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand, CommandError

User = get_user_model()


class Command(BaseCommand):
    """
    This Command creates an API JWT used to authenticate API calls from client (React) to django rest framework.
    Once token is created, the token will be saved as an environment variable on client.
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

        try:
            self.stdout.write("Creating React Limited Access Token...", ending="\n")

            # # Test if React Environment Path exists
            # react_env_file = ".env.dev" if settings.DEBUG else "env.prod"
            # react_env_path = os.path.join(settings.REACT_DIR, react_env_file)
            #
            # if not os.path.isfile(react_env_path):
            #     self.stdout.write(
            #         self.style.SUCCESS(
            #             f"React Environ Path '{react_env_path}' Does Not Exist."
            #         ),
            #         ending="\n",
            #     )
            #     exit(0)

            # Create React Limited Access Token
            token_user, created = User.objects.get_or_create(username="dummy_token_user")
            if not created:
                self.stdout.write(
                    self.style.SUCCESS(f"Token User `{token_user.username}` already exists"),
                    ending="\n",
                )

            # make dummy account password unusable.
            token_user.set_unusable_password()
            token_user.save()

            env_prefix = options["env_prefix"].strip()
            # env_var = f"{env_prefix}={str(token_user.auth_token)}\n"
            os.environ[f"{env_prefix}"] = str(token_user.auth_token)

            # with open(react_env_path, "r+") as f:
            #
            #     # React environment variable prefix name
            #
            #     original_content = f.read()
            #     # Remove previous token environment variable
            #     original_content = re.sub(rf"{env_prefix}=.*\n?", "", original_content)
            #
            #     f.seek(0)  # got to the beginning of file
            #
            #     # Must match react env variable name here

            self.stdout.write(self.style.SUCCESS("Successfully created React API Token"), ending="\n")

        except Exception as e:
            traceback.print_exc()
            self.stdout.write(self.style.WARNING("Creating Access Token for React Failed"))
            raise CommandError(e, returncode=1)

        self.style.SUCCESS("REACT TOKEN Created Success")

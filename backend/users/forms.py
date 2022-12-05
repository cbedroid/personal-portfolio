from allauth.account.forms import LoginForm
from django.conf import settings
from django.contrib.auth import forms, get_user_model
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

User = get_user_model()


class UserSignUpForm(forms.UserCreationForm):
    def __init__(self, *args, **kwargs):
        super(UserSignUpForm, self).__init__(*args, **kwargs)
        self.fields["username"].help_text = _(
            "Required. {} characters or fewer. Letters, digits and @/./+/-/_ only.".format(
                settings.ACCOUNT_USERNAME_MAX_LENGTH
            )
        )
        self.fields["password1"].help_text = _(
            (
                "Your password can’t be too similar to your other personal information."
                "</br>Your password must contain at least 8 characters."
                "</br>Your password can’t be a commonly used password."
                "</br>Your password can’t be entirely numeric."
            )
        )

    field_order = ["username", "email", "password1", "password2"]

    class Meta:
        model = User
        fields = (
            "username",
            "email",
        )

    def clean_username(self):
        username = self.cleaned_data["username"]
        if len(username) > settings.ACCOUNT_USERNAME_MAX_LENGTH:
            raise ValidationError(
                _(
                    "Please enter a username value less than the {} characters".format(
                        settings.ACCOUNT_USERNAME_MAX_LENGTH
                    )
                )
            )

        try:
            user = User.objects.filter(username__iexact=username)
            if user.exists():
                raise ValidationError(_("Sorry, that username is already taken! "))
            return username
        except User.DoesNotExist:
            return username

    def clean_email(self):
        email = self.cleaned_data["email"]
        try:
            user = User.objects.filter(email__iexact=email)
            if user.exists():
                raise ValidationError(
                    _("A user is already registered with this e-mail address.")
                )
            return email
        except User.DoesNotExist:
            return email

    def save(self, *args, **kwargs):
        # Ensure you call the parent class's save.
        user = super(UserSignUpForm, self).save(*args, **kwargs)
        user.profile.is_subscribe = self.cleaned_data["newsletter"]
        user.profile.save()
        return user


class UserLoginForm(LoginForm):
    def __init__(self, *args, **kwargs):
        super(UserLoginForm, self).__init__(*args, **kwargs)

    def login(self, *args, **kwargs):
        return super(UserLoginForm, self).login(*args, **kwargs)


class UserUpdateForm(forms.UserChangeForm):
    class Meta:
        model = User
        fields = ["username", "email"]

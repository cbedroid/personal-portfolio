from django.contrib import messages
from django.contrib.auth import authenticate, get_user_model, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from .forms import RegistrationForm

User = get_user_model()


def error_404(request, exception):
    return render(request, "snippets/HTTP/base_error.html")


def accountSignup(request):
    # Note: Need to recaptcha this form for spaming post

    context = {}
    form = RegistrationForm(request.POST or None)
    if request.method == "POST":
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Welcome %s!" % user.username)
            return HttpResponseRedirect(reverse("home"))
    context["form"] = form
    return render(request, "account/signup.html", context)


def accountLogin(request):
    if request.method == "POST":
        form = AuthenticationForm(request=request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}")
                return HttpResponseRedirect(reverse("index"))
            else:
                messages.error(request, "Invalid username or password.")
        else:
            messages.error(request, "Invalid username or password.")
    form = AuthenticationForm()
    return render(request, "account/login.html", context={"form": form})


def accountLogout(request):
    logout(request)
    messages.info(request, "You logged out successfully!")
    return HttpResponseRedirect(reverse("index"))

# Generated by Django 4.0.7 on 2022-09-25 04:06

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0003_historicaluser_avatar_user_avatar"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="historicaluser",
            name="avatar",
        ),
        migrations.RemoveField(
            model_name="user",
            name="avatar",
        ),
        migrations.CreateModel(
            name="UserProfile",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("avatar", models.URLField(blank=True, help_text="Avatar url. (not required)", null=True)),
                ("description", models.TextField(max_length=500)),
                (
                    "user",
                    models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
                ),
            ],
        ),
    ]

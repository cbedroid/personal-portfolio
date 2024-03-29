# Generated by Django 4.0.7 on 2023-06-11 20:12

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Technology",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        help_text="Programming Languages, technologies...etc",
                        max_length=20,
                        unique=True,
                    ),
                ),
                (
                    "image",
                    models.URLField(blank=True, help_text="Technology image url"),
                ),
                (
                    "link",
                    models.URLField(blank=True, help_text="Technology website url"),
                ),
            ],
            options={
                "verbose_name_plural": "technologies",
            },
        ),
        migrations.CreateModel(
            name="Skill",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=20)),
                (
                    "experience",
                    models.PositiveIntegerField(
                        help_text="Number of years of experience"
                    ),
                ),
                (
                    "rate",
                    models.PositiveIntegerField(
                        default=25, help_text="Experience level from 0 - 100"
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Resume",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("url", models.URLField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateField(auto_now=True)),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Project",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=40, unique=True)),
                ("description", models.TextField(max_length=800)),
                ("video", models.URLField(help_text="Video preview link for project")),
                (
                    "link",
                    models.URLField(blank=True, help_text="Project's website link"),
                ),
                (
                    "technology",
                    models.ManyToManyField(
                        related_name="project", to="core.technology"
                    ),
                ),
            ],
        ),
    ]

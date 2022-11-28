# Generated by Django 4.0.7 on 2022-09-25 00:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Skill",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=20)),
                ("experience", models.PositiveIntegerField(help_text="Number of years of experience")),
            ],
        ),
    ]

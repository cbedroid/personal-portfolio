# Generated by Django 4.0.7 on 2022-10-15 22:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0012_resume_created_at_resume_updated_at"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="technology",
            options={"verbose_name_plural": "technologies"},
        ),
    ]

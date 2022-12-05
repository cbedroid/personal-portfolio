# Generated by Django 4.0.7 on 2022-10-16 01:04

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0006_socialaccount"),
    ]

    operations = [
        migrations.AlterField(
            model_name="socialaccount",
            name="link",
            field=models.URLField(
                validators=[
                    django.core.validators.RegexValidator(
                        message="Enter a fucking valid URL",
                        regex="^(https?:\\/\\/|mailto\\:).*\\.(com|org|net)\\.*$/",
                    )
                ]
            ),
        ),
    ]

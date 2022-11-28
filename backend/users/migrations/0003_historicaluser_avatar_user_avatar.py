# Generated by Django 4.0.7 on 2022-09-25 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_alter_historicaluser_options_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="historicaluser",
            name="avatar",
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="user",
            name="avatar",
            field=models.URLField(blank=True, null=True),
        ),
    ]

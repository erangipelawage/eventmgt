# Generated by Django 4.2.3 on 2023-11-09 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel_app', '0013_auto_20200927_1627'),
    ]

    operations = [
        migrations.AlterField(
            model_name='checkin',
            name='phone_number',
            field=models.CharField(max_length=10, null=True),
        ),
    ]

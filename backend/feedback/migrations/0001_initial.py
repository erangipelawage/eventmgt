# Generated by Django 4.2.3 on 2023-07-16 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('feedbackid', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('rating', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=300)),
            ],
        ),
    ]
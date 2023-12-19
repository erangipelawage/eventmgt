# Generated by Django 4.2.3 on 2023-12-16 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eventbooking', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='eventbooking',
            old_name='ArrivalDate',
            new_name='BookingDate',
        ),
        migrations.RemoveField(
            model_name='eventbooking',
            name='DepartureDate',
        ),
        migrations.AlterField(
            model_name='eventbooking',
            name='ContactNo',
            field=models.CharField(max_length=15),
        ),
    ]
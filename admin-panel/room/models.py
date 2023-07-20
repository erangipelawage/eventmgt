from django.db import models


class Room(models.Model):
    room_id = models.IntegerField(unique=True, primary_key=True)
    room_name = models.CharField(max_length=150)
    room_type = models.CharField(max_length=150)
    description = models.TextField()

    # image = models.ImageField()
    price = models.FloatField()

from django.db import models

class YourModelName(models.Model):
    feedbackid = models.CharField(max_length=100)
    name = models.IntegerField()
    # Add other fields as needed

    feedbackid
    name
    rating
    description
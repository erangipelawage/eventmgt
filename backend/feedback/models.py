from django.db import models

class feedback(models.Model):
    name= models.CharField(max_length=100)
    rating= models.CharField(max_length=200)
    description= models.CharField(max_length=300)
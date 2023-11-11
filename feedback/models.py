from django.db import models

class feedback(models.Model):
    name= models.CharField(max_length=100)
    message= models.CharField(max_length=300)
    rating= models.CharField(max_length=200)

    def _str_(self):
        return self.title

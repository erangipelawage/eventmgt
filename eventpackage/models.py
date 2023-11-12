from django.db import models

class eventpackage(models.Model):
    event_name= models.CharField(max_length=100)
    desc= models.CharField(max_length=300)
    price= models.CharField(max_length=200)

    def _str_(self):
        return self.title

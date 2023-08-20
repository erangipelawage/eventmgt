from django.db import models

# Create your models here.

class booking(models.Model):
    FullName = models.CharField(max_length=100)
    Email = models.TextField()
    ContactNo = models.TextField()
    ArrivalDate = models.TextField()
    DepartureDate = models.TextField()
    Price = models.TextField()

    def _str_(self):
        return self.title
from django.db import models

class eventbooking(models.Model):
    FullName= models.CharField(max_length=300)
    Email= models.CharField(max_length=100)
    ContactNo= models.CharField(max_length=15)
    Package = models.CharField(max_length=200)
    ArrivalDate = models.DateField()
    Price = models.FloatField()


    def _str_(self):
        return self.title

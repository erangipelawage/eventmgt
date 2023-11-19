from django.db import models

class outdoorbooking(models.Model):
    FullName= models.CharField(max_length=300)
    Email= models.CharField(max_length=100)
    ContactNo= models.CharField(max_length=200)
    Package = models.CharField(max_length=200)
    ArrivalTime = models.TimeField()
    DepartureTime = models.TimeField()
    Price = models.FloatField()


    def _str_(self):
        return self.title
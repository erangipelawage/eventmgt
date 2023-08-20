from django.db import models

class customer(models.Model):
    email = models.CharField(max_length=120)
    name = models.TextField()
    password = models.TextField()

    def _str_(self):
        return self.title
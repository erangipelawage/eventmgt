from rest_framework import serializers
from .models import outdoorbooking

class outdoorbookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = outdoorbooking
        fields = ('id', 'FullName', 'Email', 'ContactNo', 'Package', 'ArrivalTime', 'DepartureTime', 'Price')
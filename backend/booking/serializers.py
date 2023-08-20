from rest_framework import serializers
from .models import booking

class bookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = booking
        fields = ('id', 'FullName', 'Email', 'ContactNo', 'ArrivalDate', 'DepartureDate', 'Price')
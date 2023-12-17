from rest_framework import serializers
from .models import eventbooking

class eventbookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = eventbooking
        fields = ('id', 'FullName', 'Email', 'ContactNo', 'Package', 'ArrivalDate', 'Price')
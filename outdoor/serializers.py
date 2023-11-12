from rest_framework import serializers
from .models import outdoor

class outdoorSerializer(serializers.ModelSerializer):
    class Meta:
        model = outdoor
        fields = ('id', 'location_name', 'desc', 'price')
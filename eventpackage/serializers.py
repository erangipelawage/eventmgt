from rest_framework import serializers
from .models import eventpackage

class eventpackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = eventpackage
        fields = ('id', 'event_name', 'desc', 'price')
from rest_framework import serializers
from .models import rating

class ratingSerializer(serializers.ModelSerializer):
    class Meta:
        model = rating
        fields = ('id', 'name', 'message', 'rating')
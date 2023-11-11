from rest_framework import serializers
from .models import feedback

class feedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = feedback
        fields = ('id', 'name', 'message', 'rating')
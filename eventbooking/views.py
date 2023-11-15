from django.shortcuts import render
from rest_framework import viewsets
from .serializers import eventbookingSerializer
from .models import eventbooking

class eventbookingView(viewsets.ModelViewSet):
    serializer_class = eventbookingSerializer
    queryset = eventbooking.objects.all()

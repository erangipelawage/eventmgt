from django.shortcuts import render
from rest_framework import viewsets
from .serializers import eventpackageSerializer
from .models import eventpackage

class eventpackageView(viewsets.ModelViewSet):
    serializer_class = eventpackageSerializer
    queryset = eventpackage.objects.all()

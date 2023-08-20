from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ratingSerializer
from .models import rating

class ratingView(viewsets.ModelViewSet):
    serializer_class = ratingSerializer
    queryset = rating.objects.all()
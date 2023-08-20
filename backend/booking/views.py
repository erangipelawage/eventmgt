from django.shortcuts import render
from rest_framework import viewsets
from .serializers import bookingSerializer
from .models import booking

class bookingView(viewsets.ModelViewSet):
    serializer_class = bookingSerializer
    queryset = booking.objects.all()
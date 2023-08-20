from django.shortcuts import render
from rest_framework import viewsets
from .serializers import customerSerializer
from .models import customer

class customerView(viewsets.ModelViewSet):
    serializer_class = customerSerializer
    queryset = customer.objects.all()

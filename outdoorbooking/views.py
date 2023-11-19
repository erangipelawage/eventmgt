from django.shortcuts import render
from rest_framework import viewsets
from .serializers import outdoorbookingSerializer
from .models import outdoorbooking

class outdoorbookingView(viewsets.ModelViewSet):
    serializer_class = outdoorbookingSerializer
    queryset = outdoorbooking.objects.all()

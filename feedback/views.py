from django.shortcuts import render
from rest_framework import viewsets
from .serializers import feedbackSerializer
from .models import feedback

class feedbackView(viewsets.ModelViewSet):
    serializer_class = feedbackSerializer
    queryset = feedback.objects.all()

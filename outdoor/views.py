from rest_framework import viewsets
from .serializers import outdoorSerializer
from .models import outdoor

class outdoorView(viewsets.ModelViewSet):
    serializer_class = outdoorSerializer
    queryset = outdoor.objects.all()

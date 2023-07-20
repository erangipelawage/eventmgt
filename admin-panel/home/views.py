from django.shortcuts import render
from room.models import Room


def index(request):
    context = {
        'rooms': Room.objects.all()
    }
    return render(request, 'pages/index.html', context=context)

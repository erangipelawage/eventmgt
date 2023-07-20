from django.shortcuts import render, redirect
from .models import Room
from .forms import RoomCreateForm
from django.contrib import messages


def create_room(request):
    if request.POST:
        form = RoomCreateForm(data=request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Room data saved successfully")
        else:
            messages.error(request, f"Cannot save.{form.errors}")

    context = {
        'form': RoomCreateForm,
    }
    return render(request, 'pages/rooms_details.html', context=context)


def edit_room(request, id):
    room = Room.objects.get(room_id=id)
    if request.POST:
        form = RoomCreateForm(data=request.POST, instance=room)

        if form.is_valid():
            form.save()
            messages.success(request, "Room data saved successfully")
            return redirect("/")
        else:
            messages.error(request, f"Cannot save.{form.errors}")
    context = {
        'room': room
    }
    return render(request, 'pages/rooms_details_edit.html', context=context)


def delete_room(request, id):
    room = Room.objects.get(room_id=id)
    room.delete()
    return redirect("/")

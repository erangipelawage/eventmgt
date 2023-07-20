from django.urls import path
from . import views
app_name = 'room'
urlpatterns = [
    path('create/', views.create_room, name='create-room'),
    path('edit/<id>', views.edit_room, name='edit-room'),
    path('delete/<id>', views.delete_room, name='delete-room'),


]

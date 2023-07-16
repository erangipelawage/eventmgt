from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse

from .models import YourModelName

def get_all_objects(request):
    objects = YourModelName.objects.all()
    data = [{'id': obj.id, 'field1': obj.field1, 'field2': obj.field2} for obj in objects]
    return JsonResponse(data, safe=False)

def create_object(request):
    if request.method == 'POST':
        data = request.POST
        obj = YourModelName.objects.create(
            field1=data['field1'],
            field2=data['field2'],
            # Add other fields as needed
        )
        return JsonResponse({'id': obj.id, 'field1': obj.field1, 'field2': obj.field2})
    return JsonResponse({'message': 'Invalid method'}, status=400)

def get_object(request, pk):
    obj = get_object_or_404(YourModelName, pk=pk)
    data = {'id': obj.id, 'field1': obj.field1, 'field2': obj.field2}
    return JsonResponse(data)

def update_object(request, pk):
    obj = get_object_or_404(YourModelName, pk=pk)
    if request.method == 'POST':
        data = request.POST
        obj.field1 = data['field1']
        obj.field2 = data['field2']
        # Update other fields as needed
        obj.save()
        return JsonResponse({'message': 'Object updated successfully'})
    return JsonResponse({'message': 'Invalid method'}, status=400)

def delete_object(request, pk):
    obj = get_object_or_404(YourModelName, pk=pk)
    if request.method == 'POST':
        obj.delete()
        return JsonResponse({'message': 'Object deleted successfully'})
    return JsonResponse({'message': 'Invalid method'}, status=400)


from django.contrib import admin
from django.urls import path
from django.urls import include, path

urlspatterns = [
    path('admin/', admin.site.urls),
    
    # add this line
    path('payments/', include('payments.urls'))
]
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from booking.views import bookingView
from rating.views import ratingView
from customer.views import customerView

router = routers.DefaultRouter()
router.register(r'bookings', bookingView, 'booking'),
router.register(r'ratings', ratingView, 'rating'),
router.register(r'customers', customerView, 'customer'),

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include(router.urls)),
    
    # add this line
    path('payments/', include('payments.urls'))
]
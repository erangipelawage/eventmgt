from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from feedback.views import feedbackView
from eventbooking.views import eventbookingView
from outdoor.views import outdoorView
from eventpackage.views import eventpackageView
from outdoorbooking.views import outdoorbookingView
from rest_framework import routers

from forgotpassword.views import forgot_password, reset_password

router = routers.DefaultRouter()
router.register(r'feedbacks', feedbackView, 'feedback'),
router.register(r'outdoors',outdoorView, 'outdoor'),
router.register(r'outdoorbookings',outdoorbookingView, 'outdoorbooking'),
router.register(r'eventpackages',eventpackageView, 'eventpackage'),
router.register(r'eventbookings',eventbookingView, 'eventbooking'),

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('hotel/', include("hotel_app.urls")),
    path('api/', include("rest_framework.urls")),
    path('accounts/', include('accounts.urls')),

    path('api/forgot-password/', forgot_password, name='forgot-password'),
    path('api/reset-password/<str:token>/', reset_password, name='reset-password')

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

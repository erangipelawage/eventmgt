from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from feedback.views import feedbackView
from rest_framework import routers



router = routers.DefaultRouter()
router.register(r'feedbacks', feedbackView, 'feedback'),

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('hotel/', include("hotel_app.urls")),
    path('api/', include("rest_framework.urls")),
    path('accounts/', include('accounts.urls')),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

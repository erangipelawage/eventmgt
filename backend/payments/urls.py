from django.urls import re_path as url
from payments import views
urlpatterns = [
    url(r'^test-payment/$', views.test_payment),
]
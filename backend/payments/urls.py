# payments/urls.py
from django.urls import re_path as url
from payments import views
from django.conf.urls import url

urlpatterns = [url(r'^test-payment/$', views.test_payment),]
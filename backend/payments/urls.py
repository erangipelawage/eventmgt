# payments/urls.pyfrom django.conf.urls import url
from payments import views
from django.conf.urls import url

urlpatterns = [url(r'^test-payment/$', views.test_payment),]
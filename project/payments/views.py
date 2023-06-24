from django.shortcuts import render
from django.conf import settings
import stripe

# Create your views here.

from django.views.generic.base import TemplateView

stripe.api_key = settings.STRIPE_SECRET_KEY

class HomePageView(TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs): #new
        context = super().get_context_data(**kwargs)
        context['key'] = settings.STRIPE_PUBLISHABLE_KEY
        return super().get_context_data(**kwargs)

def charge(request): #new
    if request.method == 'POST':
        charge = stripe.Charge.create(
            amount=500,
            currency='inr',
            description='Payment gateway',
            source=request.POST['stripeToken']
        )
        return render(request, 'charge.html')
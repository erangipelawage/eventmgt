from django.shortcuts import render
import stripe
from rest_framework.decorators import api_view

stripe.api_key = 'sk_test_51NKmX5Cn2RHbPGapux8siW6x1dyQoGt1JdYUBB5PueMHokiDZBg3PkoC3KnSbkMN4ViEPw0UznYIiZcc57rTKihO00He98lQfe'

@api_view(['POST'])
def test_payment(request):
    test_payment_intent = stripe.PaymentIntent.create(
        amount=1000, currency='usd', 
        payment_method_types=['card'],
        receipt_email='lsanjeewa18@gmail.com')
    
    return Response(status=status.HTTP_200_OK, data=test_payment_intent)

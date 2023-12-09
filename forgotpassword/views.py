from django.contrib.auth.models import User
from rest_framework import serializers, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from django.utils.crypto import get_random_string

from .serializers import ForgotPasswordSerializer

@api_view(['POST'])
def forgot_password(request):
    serializer = ForgotPasswordSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        # Generate a unique token
        token = get_random_string(length=32)

        # Store the token in the User model (you may want to create a separate model for storing reset tokens)
        user.reset_password_token = token
        user.save()

        # Send a password reset email
        subject = 'Password Reset'
        message = f'Click the following link to reset your password: {settings.FRONTEND_URL}/reset-password/{token}/'
        from_email = settings.DEFAULT_FROM_EMAIL
        to_email = [user.email]
        send_mail(subject, message, from_email, to_email)

        return Response({'message': 'Password reset email sent'}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def reset_password(request, token):
    # Retrieve the user based on the token
    try:
        user = User.objects.get(reset_password_token=token)
    except User.DoesNotExist:
        return Response({'message': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)

    # Update the user's password
    new_password = request.data.get('new_password')
    user.set_password(new_password)
    user.reset_password_token = None  # Clear the reset token
    user.save()

    return Response({'message': 'Password reset successful'}, status=status.HTTP_200_OK)

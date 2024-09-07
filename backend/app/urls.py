
from django.urls import path
from .views import CheckPaymentStatusView, PaymentIntentView


urlpatterns = [
    path('create-stripe-session/', PaymentIntentView.as_view(), name='create-payment-intent'),
    path('check-payment-status/', CheckPaymentStatusView.as_view(), name='payment-status'),
]

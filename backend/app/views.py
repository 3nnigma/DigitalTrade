from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from decimal import Decimal
import stripe


stripe.api_key = settings.STRIPE_SECRET_KEY


class PaymentIntentView(APIView):
    def post(self, request):
        try:
            amount = request.data.get('amount')
            amount_in_cents = int(float(amount) * 100)

            session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                line_items=[{
                    'price_data': {
                        'currency': 'usd',
                        'product_data': {
                            'name': 'Account Top-up',
                        },
                        'unit_amount': amount_in_cents,
                    },
                    'quantity': 1,
                }],
                mode='payment',
                success_url=f'http://localhost:3000/payment/success?session_id={{CHECKOUT_SESSION_ID}}',
                cancel_url=f'http://localhost:3000/payment/cancel',
            )
            # Возвращаем готовый URL для перенаправления
            return Response({'url': session.url}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CheckPaymentStatusView(APIView):
    def post(self, request):
        try:
            session_id = request.data.get('session_id')
            session = stripe.checkout.Session.retrieve(session_id)

            if session.payment_status == 'paid':
                user = request.user
                amount_paid = session.amount_total / 100  # type: ignore

                user.balance += Decimal(amount_paid)
                user.save()

                return Response({'amount': Decimal(amount_paid)}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Payment not successful'}, status=status.HTTP_400_BAD_REQUEST)

        except stripe.StripeError as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


from django.urls import path, re_path
from .views import (
	CustomProviderAuthView,
	CustomTokenRefreshView,
	CustomTokenVerifyView,
	CustomTokenObtainPairView,
	LogoutView,
	UserDetailView
)


urlpatterns = [
    re_path(r'^o/(?P<provider>\S+)/$',
            CustomProviderAuthView.as_view(), name='provider-auth'),
    path('user/me/', UserDetailView.as_view(), name='user-detail'),
    path('jwt/create/', CustomTokenObtainPairView.as_view()),
    path('jwt/refresh/', CustomTokenRefreshView.as_view()),
    path('jwt/verify/', CustomTokenVerifyView.as_view()),
    path('logout/', LogoutView.as_view()),
]

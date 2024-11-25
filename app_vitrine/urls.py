from django.urls import path
from .views import ProduitListCreateView, ProduitRetrieveUpdateDeleteView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('produits/', ProduitListCreateView.as_view(), name='produits_list_create'),  
    path('produits/<int:pk>/', ProduitRetrieveUpdateDeleteView.as_view(), name='produits_retrieve_update_delete'),  
]

urlpatterns += [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

from django.urls import path
from .views import ProduitListCreateView

urlpatterns = [
    path('produits/', ProduitListCreateView.as_view(), name='produits_list_create'),
]

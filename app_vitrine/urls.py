from django.urls import path
from . import views

urlpatterns = [
    path('produits/', views.ProduitListView.as_view(), name='produits_list_create'),
    path('produits/<int:id>/', views.ProduitDetailView.as_view(), name='produit-detail'),
]
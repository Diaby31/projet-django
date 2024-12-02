from django.urls import path
from .views import (
    ProduitListView,
    home,
    ProduitListCreateView,
    ProduitDetailView,
    CategorieListView,
    AvisListCreateView,
    PanierView,
    ProduitFilteredListView
)

urlpatterns = [
    path('', home, name='home'),
    path('produits/', ProduitListView.as_view(), name='produits-list'),
    path('produits/filtre/', ProduitFilteredListView.as_view(), name='produits-filtered-list'),
    path('produits/<int:id>/', ProduitDetailView.as_view(), name='produit-detail'),
    path('produits/<int:produit_id>/avis/', AvisListCreateView.as_view(), name='avis-list-create'),
    path('categories/', CategorieListView.as_view(), name='categories-list'),
    path('panier/<str:utilisateur>/', PanierView.as_view(), name='panier-view'),
]

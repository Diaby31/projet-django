from django_filters import rest_framework as filters
from .models import Produit

class ProduitFilter(filters.FilterSet):
    nom = filters.CharFilter(lookup_expr='icontains') 
    prix_min = filters.NumberFilter(field_name='prix', lookup_expr='gte')  
    prix_max = filters.NumberFilter(field_name='prix', lookup_expr='lte')  
    marque = filters.CharFilter(lookup_expr='icontains') 

    class Meta:
        model = Produit
        fields = ['nom', 'marque', 'prix_min', 'prix_max']

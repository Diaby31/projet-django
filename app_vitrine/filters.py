import django_filters
from .models import Produit

class ProduitFilter(django_filters.FilterSet):
    nom = django_filters.CharFilter(lookup_expr='icontains')
    prix_min = django_filters.NumberFilter(field_name='prix', lookup_expr='gte')
    prix_max = django_filters.NumberFilter(field_name='prix', lookup_expr='lte')
    categorie = django_filters.CharFilter(field_name='categorie__nom', lookup_expr='icontains')

    class Meta:
        model = Produit
        fields = ['nom', 'prix_min', 'prix_max', 'categorie']

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend
from django_filters import rest_framework as filters
from django.http import HttpResponse
from .models import Produit, Categorie, Avis, Panier, ArticlePanier
from .serializers import (
    ProduitSerializer,
    CategorieSerializer,
    AvisSerializer,
    PanierSerializer,
    ArticlePanierSerializer
)
from rest_framework.generics import ListAPIView



# Vue pour la page d'accueil
def home(request):
    return HttpResponse("<h1>Bienvenue sur la page d'accueil de l'API App_Vitrine</h1>")

# Recherche avancée et pagination pour les produits
class ProduitFilter(filters.FilterSet):
    prix_min = filters.NumberFilter(field_name='prix', lookup_expr='gte')
    prix_max = filters.NumberFilter(field_name='prix', lookup_expr='lte')

    class Meta:
        model = Produit
        fields = ['categorie', 'prix_min', 'prix_max']

class ProduitListView(ListAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['nom', 'description', 'categorie__nom']
    filterset_class = ProduitFilter
    pagination_class = None  # Ajoute une pagination ici si nécessaire

# Gestion des produits (CRUD basique)
class ProduitListCreateView(APIView):
    def get(self, request, *args, **kwargs):
        produits = Produit.objects.all()
        serializer = ProduitSerializer(produits, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = ProduitSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProduitDetailView(APIView):
    def get(self, request, id, format=None):
        try:
            produit = Produit.objects.get(pk=id)
            serializer = ProduitSerializer(produit)
            return Response(serializer.data)
        except Produit.DoesNotExist:
            return Response({"detail": "Produit non trouvé"}, status=status.HTTP_404_NOT_FOUND)

# Gestion des catégories
class CategorieListView(APIView):
    def get(self, request, format=None):
        categories = Categorie.objects.all()
        serializer = CategorieSerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CategorieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Gestion des avis pour les produits
class AvisListCreateView(APIView):
    def get(self, request, produit_id):
        avis = Avis.objects.filter(produit_id=produit_id)
        serializer = AvisSerializer(avis, many=True)
        return Response(serializer.data)

    def post(self, request, produit_id):
        data = request.data
        data['produit'] = produit_id
        serializer = AvisSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Gestion du panier
class PanierView(APIView):
    def get(self, request, utilisateur):
        panier, _ = Panier.objects.get_or_create(utilisateur=utilisateur)
        serializer = PanierSerializer(panier)
        return Response(serializer.data)

    def post(self, request, utilisateur):
        panier, _ = Panier.objects.get_or_create(utilisateur=utilisateur)
        data = request.data
        data['panier'] = panier.id
        serializer = ArticlePanierSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListAPIView
from .models import Produit
from .serializers import ProduitSerializer

class ProduitFilteredListView(ListAPIView):
    queryset = Produit.objects.all()
    serializer_class = ProduitSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['nom', 'prix', 'categorie']
    search_fields = ['nom', 'categorie']

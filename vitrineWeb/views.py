from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from app_vitrine.models import Produit, Categorie
from app_vitrine.serializers import ProduitSerializer

class ProduitListView(APIView):
    def get(self, request, format=None):
        produits = Produit.objects.all()
        serializer = ProduitSerializer(produits, many=True)
        return Response(serializer.data)

class ProduitDetailView(APIView):
    def get(self, request, id, format=None):
        try:
            produit = Produit.objects.get(pk=id)
            serializer = ProduitSerializer(produit)
            return Response(serializer.data)
        except Produit.DoesNotExist:
            return Response({"detail": "Produit non trouvé"}, status=status.HTTP_404_NOT_FOUND)
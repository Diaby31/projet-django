from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Produit
from .serializers import ProduitSerializer


class ProduitListCreateView(APIView):
    def get(self, request):
        produits = Produit.objects.all()
        serializer = ProduitSerializer(produits, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProduitSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
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
        
        
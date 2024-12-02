from rest_framework import serializers
from .models import Produit
from .models import Categorie
from .models import Avis
from .models import Panier, ArticlePanier



class ProduitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produit
        fields = '__all__'

        
class CategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categorie
        fields = '__all__'
        
class AvisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avis
        fields = '__all__'
        

class ArticlePanierSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticlePanier
        fields = '__all__'

class PanierSerializer(serializers.ModelSerializer):
    articles = ArticlePanierSerializer(many=True, read_only=True)

    class Meta:
        model = Panier
        fields = '__all__'

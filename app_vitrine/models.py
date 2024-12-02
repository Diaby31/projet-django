# app_vitrine/models.py
from django.db import models

class Categorie(models.Model):
    nom = models.CharField(max_length=100)

    def __str__(self):
        return self.nom

class Produit(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField()
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='produits/')
    categorie = models.ForeignKey(Categorie, on_delete=models.CASCADE, related_name='produits')

    def __str__(self):
        return self.nom
    
class Avis(models.Model):
    produit = models.ForeignKey('Produit', on_delete=models.CASCADE, related_name='avis')
    utilisateur = models.CharField(max_length=100)
    note = models.PositiveSmallIntegerField()  # de 1 à 5
    commentaire = models.TextField()
    date = models.DateTimeField(auto_now_add=True)


class Panier(models.Model):
    utilisateur = models.CharField(max_length=100)
    date_creation = models.DateTimeField(auto_now_add=True)

class ArticlePanier(models.Model):
    panier = models.ForeignKey(Panier, on_delete=models.CASCADE, related_name='articles')
    produit = models.ForeignKey('Produit', on_delete=models.CASCADE)
    quantite = models.PositiveIntegerField(default=1)

from django.db import models

class Categorie(models.Model):
    nom = models.CharField(max_length=255)

    def __str__(self):
        return self.nom

class Produit(models.Model):
    nom = models.CharField(max_length=255)
    description = models.TextField()
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    marque = models.CharField(max_length=255, blank=True, null=True)
    categorie = models.ForeignKey(Categorie, related_name='produits', on_delete=models.CASCADE, null=True, blank=True)
    image = models.ImageField(upload_to='produits/', null=True, blank=True)

    def __str__(self):
        return self.nom

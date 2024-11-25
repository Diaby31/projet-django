from django.contrib import admin
from .models import Produit, Categorie

@admin.register(Categorie)
class CategorieAdmin(admin.ModelAdmin):
    list_display = ('nom',)


@admin.register(Produit)
class ProduitAdmin(admin.ModelAdmin):
    list_display = ('marque', 'prix', 'categorie')

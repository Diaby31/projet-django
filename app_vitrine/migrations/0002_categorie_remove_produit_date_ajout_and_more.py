# Generated by Django 5.1.3 on 2024-11-25 14:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_vitrine', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categorie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='produit',
            name='date_ajout',
        ),
        migrations.RemoveField(
            model_name='produit',
            name='disponible',
        ),
        migrations.AddField(
            model_name='produit',
            name='marque',
            field=models.CharField(default='Inconnu', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='produit',
            name='categorie',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='produits', to='app_vitrine.categorie'),
        ),
    ]
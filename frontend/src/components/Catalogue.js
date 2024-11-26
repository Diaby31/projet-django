import React, { useState, useEffect, useCallback } from 'react';
import { getProduits } from '../api';  
import './Catalogue.css';

const Catalogue = () => {
    const [produits, setProduits] = useState([]);
    const [filters, setFilters] = useState({
        nom: '',
        prix_min: '',
        prix_max: '',
        categorie: ''
    });

    // Fonction pour récupérer les produits en appliquant les filtres
    const fetchProduits = useCallback(async () => {
        try {
            const data = await getProduits(filters);  // Envoie les filtres à l'API
            console.log('Produits:', data);  // Pour vérifier les données
            setProduits(data);  // Met à jour les produits dans l'état
        } catch (error) {
            console.error("Erreur lors de la récupération des produits:", error);
        }
    }, [filters]);  // Ajoutez "filters" comme dépendance pour rafraîchir les produits lorsqu'ils changent

    // Effet pour charger les produits quand la page est chargée
    useEffect(() => {
        fetchProduits();
    }, [fetchProduits]);  // Récupère les produits chaque fois que les filtres changent

    // Fonction pour mettre à jour les filtres à chaque changement
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        fetchProduits();  // Récupère les produits avec les filtres appliqués
    };

    return (
        <div>
            <h1>Catalogue des produits</h1>
            <form onSubmit={handleFilterSubmit}>
                <input
                    type="text"
                    name="nom"
                    value={filters.nom}
                    placeholder="Nom du produit"
                    onChange={handleFilterChange}
                />
                <input
                    type="number"
                    name="prix_min"
                    value={filters.prix_min}
                    placeholder="Prix minimum"
                    onChange={handleFilterChange}
                />
                <input
                    type="number"
                    name="prix_max"
                    value={filters.prix_max}
                    placeholder="Prix maximum"
                    onChange={handleFilterChange}
                />
                <input
                    type="text"
                    name="categorie"
                    value={filters.categorie}
                    placeholder="Catégorie"
                    onChange={handleFilterChange}
                />
                <button type="submit">Filtrer</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Nom du produit</th>
                        <th>Prix</th>
                        <th>Catégorie</th>
                    </tr>
                </thead>
                <tbody>
                    {produits.length === 0 ? (
                        <tr>
                            <td colSpan="3">Aucun produit trouvé</td>
                        </tr>
                    ) : (
                        produits.map((produit) => (
                            <tr key={produit.id}>
                                <td>{produit.nom}</td>
                                <td>{produit.prix}</td>
                                <td>{produit.categorie}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Catalogue;

import React, { useState, useEffect, useCallback } from 'react';
import { getProduits } from '../api';

const Catalogue = () => {
    const [produits, setProduits] = useState([]); // Liste des produits
    const [filters, setFilters] = useState({  // Filtres pour la recherche
        nom: '',
        prix_min: '',
        prix_max: '',
        categorie: ''
    });

    // Fonction pour récupérer les produits
    const fetchProduits = useCallback(async () => {
        try {
            const data = await getProduits(filters);
            setProduits(data);
        } catch (error) {
            console.error("Erreur lors de la récupération des produits :", error);
        }
    }, [filters]);

    useEffect(() => {
        fetchProduits(); // Récupère les produits à chaque modification des filtres
    }, [fetchProduits]);

    // Gestion des changements dans les filtres
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    // Gestion de la soumission du formulaire
    const handleFilterSubmit = (e) => {
        e.preventDefault();
        fetchProduits(); // Actualise les produits
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Catalogue des produits</h1>

            {/* Formulaire de filtre */}
            <form className="row g-3 mb-4" onSubmit={handleFilterSubmit}>
                <div className="col-md-3">
                    <input
                        className="form-control"
                        type="text"
                        name="nom"
                        value={filters.nom}
                        placeholder="Nom du produit"
                        onChange={handleFilterChange}
                    />
                </div>
                <div className="col-md-2">
                    <input
                        className="form-control"
                        type="number"
                        name="prix_min"
                        value={filters.prix_min}
                        placeholder="Prix minimum"
                        onChange={handleFilterChange}
                    />
                </div>
                <div className="col-md-2">
                    <input
                        className="form-control"
                        type="number"
                        name="prix_max"
                        value={filters.prix_max}
                        placeholder="Prix maximum"
                        onChange={handleFilterChange}
                    />
                </div>
                <div className="col-md-3">
                    <input
                        className="form-control"
                        type="text"
                        name="categorie"
                        value={filters.categorie}
                        placeholder="Catégorie"
                        onChange={handleFilterChange}
                    />
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary w-100" type="submit">Filtrer</button>
                </div>
            </form>

            {/* Table des produits */}
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Nom du produit</th>
                        <th>Prix</th>
                        <th>Catégorie</th>
                    </tr>
                </thead>
                <tbody>
                    {produits.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="text-center">Aucun produit trouvé</td>
                        </tr>
                    ) : (
                        produits.map((produit) => (
                            <tr key={produit.id}>
                                <td>{produit.nom}</td>
                                <td>{produit.prix}</td>
                                <td>{produit.categorie || 'Non spécifié'}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Catalogue;

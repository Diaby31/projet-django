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

    const fetchProduits = useCallback(async () => {
        try {
            const data = await getProduits(filters);  
            console.log('Produits:', data);  
            setProduits(data);  
        } catch (error) {
            console.error("Erreur lors de la récupération des produits:", error);
        }
    }, [filters]);  

   
    useEffect(() => {
        fetchProduits();
    }, [fetchProduits]);  

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        fetchProduits(); 
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

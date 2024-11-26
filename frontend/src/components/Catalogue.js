import React, { useEffect, useState } from 'react';
import API from '../api';

const Catalogue = () => {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        API.get('produits/')
            .then(response => setProduits(response.data))
            .catch(error => console.error('Erreur de chargement des produits:', error));
    }, []);

    return (
        <div>
            <h1>Catalogue des Produits</h1>
            <ul>
                {produits.map(produit => (
                    <li key={produit.id}>{produit.nom} - {produit.prix}€</li>
                ))}
            </ul>
        </div>
    );
};

export default Catalogue;

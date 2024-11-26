import React, { useEffect, useState } from 'react';
import { getProduits } from '../api';

const Catalogue = () => {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const data = await getProduits();
                setProduits(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des produits :", error);
            }
        };
        fetchProduits();
    }, []);

    return (
        <div>
            <h1>Catalogue des Produits</h1>
            <ul>
                {produits.map((produit) => (
                    <li key={produit.id}>
                        {produit.nom} - {produit.prix}€
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Catalogue;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

const ProductDetail = () => {
    const { id } = useParams();
    const [produit, setProduit] = useState(null);

    useEffect(() => {
        API.get(`produits/${id}/`)
            .then(response => setProduit(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!produit) return <p>Chargement...</p>;

    return (
        <div>
            <h1>{produit.nom}</h1>
            <p>{produit.description}</p>
            <p>Prix : {produit.prix} €</p>
            <p>Marque : {produit.marque}</p>
        </div>
    );
};

export default ProductDetail;

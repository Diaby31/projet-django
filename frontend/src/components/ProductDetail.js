import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduitById } from '../api';

const ProductDetail = () => {
    const { id } = useParams(); // Récupération de l'ID via les paramètres d'URL
    const navigate = useNavigate();
    const [produit, setProduit] = useState(null);

    useEffect(() => {
        const fetchProduit = async () => {
            try {
                const data = await getProduitById(id);
                setProduit(data);
            } catch (error) {
                console.error('Erreur lors de la récupération du produit:', error);
            }
        };
        fetchProduit();
    }, [id]);

    if (!produit) {
        return <div>Chargement du produit...</div>;
    }

    return (
        <div style={{ padding: '20px', color: '#fff', background: '#1a1a1a' }}>
            <h1>{produit.nom}</h1>
            {produit.image && (
                <img
                    src={produit.image}
                    alt={produit.nom}
                    style={{ maxWidth: '300px', borderRadius: '10px' }}
                />
            )}
            <p>{produit.description}</p>
            <p><strong>Prix:</strong> {produit.prix} €</p>
            <p><strong>Marque:</strong> {produit.marque}</p>
            <button onClick={() => navigate('/catalogue')}>Retour</button>
        </div>
    );
};

export default ProductDetail;

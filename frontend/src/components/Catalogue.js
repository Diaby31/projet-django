import React, { useEffect, useState } from 'react';

const Catalogue = () => {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/produits/')
            .then(response => response.json())
            .then(data => setProduits(data))
            .catch(error => console.error('Erreur lors de la récupération des produits:', error));
    }, []);

    return (
        <div style={{ padding: '2rem', background: 'linear-gradient(180deg, #3b3b58, #1e1e2f)', color: 'white' }}>
            <h1 style={{ textAlign: 'center', color: '#ff00ff', textShadow: '0 0 10px #ff00ff' }}>Catalogue des Produits</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                {produits.map(produit => (
                    <div key={produit.id} style={{
                        padding: '1rem',
                        border: '1px solid #00ff87',
                        borderRadius: '10px',
                        width: '250px',
                        textAlign: 'center',
                        background: '#1e1e2f'
                    }}>
                        <h2>{produit.nom}</h2>
                        <p>{produit.description}</p>
                        <p><strong>{produit.prix}€</strong></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogue;

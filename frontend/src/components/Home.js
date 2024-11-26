import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#121212', color: '#fff' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Bienvenue sur notre site</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                Découvrez nos produits exceptionnels et filtrez-les par catégories et prix.
            </p>
            <div>
                <Link to="/catalogue" style={buttonStyle}>
                    Voir le catalogue
                </Link>
                <Link to="/contact" style={{ ...buttonStyle, marginLeft: '20px' }}>
                    Contactez-nous
                </Link>
            </div>
        </div>
    );
};

const buttonStyle = {
    display: 'inline-block',
    background: 'linear-gradient(90deg, #12ffb0, #b800ff)',
    color: '#fff',
    padding: '15px 30px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
};

export default Home;

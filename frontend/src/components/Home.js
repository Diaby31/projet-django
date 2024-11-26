import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Bienvenue sur notre site de produits</h1>
            <p className="home-subtitle">Explorez notre catalogue pour trouver vos articles préférés !</p>
            <button className="cta-button">Voir le Catalogue</button>
        </div>
    );
};

export default Home;

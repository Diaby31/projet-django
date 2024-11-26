import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '1rem',
            background: 'linear-gradient(90deg, #00ff87, #ff00ff)',
            color: 'white',
            fontSize: '1.2rem'
        }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faHome} /> Accueil
            </Link>
            <Link to="/catalogue" style={{ color: 'white', textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faBoxOpen} /> Catalogue
            </Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Link>
        </nav>
    );
};

export default Navbar;

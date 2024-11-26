import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ background: '#121212', padding: '10px 20px', display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.5rem' }}>
                Accueil
            </Link>
            <div>
                <Link to="/catalogue" style={{ marginRight: '20px', color: '#fff', textDecoration: 'none' }}>
                    Catalogue
                </Link>
                <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

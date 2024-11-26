import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/produit/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
};

export default App;

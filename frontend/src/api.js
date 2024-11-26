import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',  
});

API.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); 
    if (token) {
        config.headers.Authorization = `Token ${token}`;  
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export const getProduits = async (filters = {}) => {
    try {
        const response = await API.get('produits/', { params: filters });
        return response.data;  
    } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
        throw error;
    }
};

export const getProduitById = async (id) => {
    try {
        const response = await API.get(`produits/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du produit :', error);
        throw error;
    }
};

export const createProduit = async (produitData) => {
    try {
        const response = await axios.post('/api/v1/produits/', produitData);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la création du produit:", error);
        throw error;
    }
};
export const addProduit = async (produitData) => {
    try {
        const response = await API.post('produits/', produitData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du produit :', error);
        throw error;
    }
};
export default API;

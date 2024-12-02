import axios from 'axios';

// Créez une instance Axios avec une configuration de base
const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',  
});

// Intercepteur pour ajouter un token JWT ou une clé d'authentification
API.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); 
    if (token) {
        config.headers.Authorization = `Token ${token}`;  
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Fonction pour obtenir la liste des produits avec des filtres
export const getProduits = async (filters = {}) => {
    try {
        const response = await API.get('produits/', { params: filters });
        return response.data;  
    } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
        throw error;
    }
};

// Fonction pour obtenir les détails d'un produit par son ID
export const getProduitById = async (id) => {
    try {
        const response = await API.get(`produits/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du produit :', error);
        throw error;
    }
};

// Fonction pour créer un produit
export const createProduit = async (produitData) => {
    try {
        const response = await API.post('produits/', produitData);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la création du produit :', error);
        throw error;
    }
};

// Export par défaut de l'instance Axios
export default API;

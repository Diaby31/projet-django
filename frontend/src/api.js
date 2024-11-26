import axios from 'axios';

// Création de l'instance d'axios avec la base URL de l'API
const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',  
});

// Intercepteur pour ajouter le token d'authentification si présent
API.interceptors.request.use(config => {
    const token = localStorage.getItem('token');  // Récupère le token depuis localStorage
    if (token) {
        config.headers.Authorization = `Token ${token}`;  // Ajoute le token dans les headers
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Fonction pour récupérer les produits avec des filtres
export const getProduits = async (filters = {}) => {
    try {
        // Envoie de la requête GET avec des paramètres (filtres)
        const response = await API.get('produits/', { params: filters });
        return response.data;  // Retourne les données reçues
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

export default API;

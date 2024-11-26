import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',  
});

API.interceptors.request.use(config => {
    const token = localStorage.getItem('token');  
    console.log(token);
    if (token) {
        config.headers.Authorization = `Token ${token}`;  
    }
    return config;
}, error => {
    return Promise.reject(error);
});

API.get('produits/')
    .then(response => console.log(response.data))  
    .catch(error => console.error(error)); 

export const getProduits = async () => {
    try {
        const response = await API.get('produits/');
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

export const addProduit = async (produit) => {
    try {
        const response = await API.post('produits/', produit);  
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l’ajout du produit :', error);
        throw error;
    }
};

export const updateProduit = async (id, produit) => {
    try {
        const response = await API.put(`produits/${id}/`, produit); 
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la mise à jour du produit :', error);
        throw error;
    }
};

export const deleteProduit = async (id) => {
    try {
        const response = await API.delete(`produits/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la suppression du produit :', error);
        throw error;
    }
};

export default API;

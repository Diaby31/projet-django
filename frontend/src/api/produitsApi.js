import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
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

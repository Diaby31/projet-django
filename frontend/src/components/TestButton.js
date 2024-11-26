import axios from 'axios';

const TestButton = () => {
    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');  // Ensure token is stored in localStorage
            console.log('Token:', token);  // Debugging step
            const response = await axios.get('http://127.0.0.1:8000/api/v1/produits/', {
                headers: {
                    Authorization: `Token ${token}`,  // Make sure the token is passed here
                },
            });
            console.log(response.data);  // Check what is returned from the API
        } catch (error) {
            console.error('Erreur lors de la récupération des produits :', error);
        }
    };

    return <button onClick={fetchData}>Test API</button>;
};

export default TestButton;

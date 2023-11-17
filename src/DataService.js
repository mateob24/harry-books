import axios from 'axios'

// const axiosInstance = axios.create();
const apiUrl = '/projects.json';

export const fetchData = async () => {
    try {
        const response = await axios.get(apiUrl);   
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
 

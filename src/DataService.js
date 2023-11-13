import axios from 'axios'

const axiosInstance = axios.create();

export const fetchData = async (endpoint) => {
    try {
        const response = await axiosInstance.get(endpoint);   
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
 

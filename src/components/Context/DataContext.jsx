import { createContext, useEffect, useState} from "react";
import axios from 'axios'

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext();

const apiUrl = '/projects.json';

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);   
            return response.data
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchData()
          .then((data) => setBooks(data))
          .catch((error) => console.error("Error fetching data:", error));
    }, []);


    return(
        <dataContext.Provider value={{ books }}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider;

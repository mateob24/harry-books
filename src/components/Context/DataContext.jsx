import { createContext, useEffect, useState} from "react";
import axios from 'axios'

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext();

// eslint-disable-next-line react/prop-types
const DataProvider = ({ Children }) => {
    const apiUrl = '/projects.json';
    const [data, setData] = useState([]);

    useEffect(() => {

    },[])


    return(
        <dataContext.Provider value={0}>
            {Children}
        </dataContext.Provider>
    )
}

export default DataProvider;

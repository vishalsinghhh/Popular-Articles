import React, {useState, useContext, useEffect} from 'react'
import { useCallback } from 'react'

const url =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key= 7bbzc8D5VjTh4kBn6GwJWc1cRUWxSn06";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("a");
    const [news, setNews] = useState([]);

    const fetchNews = useCallback(async()=>{
        setLoading(true);
    })

    return (
        <div>
            
        </div>
    )
}

export default context

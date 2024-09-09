import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
    const getApiData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
            setIsLoading(false);
            
            
        }
        catch(error) {
            console.error(`Fetch Error: ${error.message}`);
            
        }
        
    }
    getApiData();
   }, [url]);
   return { data }
}
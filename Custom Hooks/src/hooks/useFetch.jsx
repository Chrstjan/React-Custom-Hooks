import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState();

   useEffect(() => {
    const getApiData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
            
        }
        catch(error) {
            console.error(`Fetch Error: ${error.message}`);
            
        }
        
    }
    getApiData();
   }, [url]);
   return { data }
}
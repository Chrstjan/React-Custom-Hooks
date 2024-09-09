import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useTitle = () => {
    const [pageTitle, setPageTitle] = useState("");
    const location = useLocation();

    useEffect(() => {
        document.title = location.pathname.slice(1);
        console.log(location);
    }, [location]);

    // useEffect(() => {
    //     setPageTitle(location);
    //     console.log(pageTitle);
    // }, [])

    return { pageTitle }
}
import { useEffect, useState } from "react"

export const useImages = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {

        const getImages = async () => {
        const imagesFiles = import.meta.glob('../../public/*');
        const imagesPaths = Object.keys(imagesFiles);
        const imageArray = imagesPaths.map((img) => {
            return img.replace("../../public/", "");
        })

        setImages(imageArray);

        }

        getImages();
    }, [])
    return { images };
}
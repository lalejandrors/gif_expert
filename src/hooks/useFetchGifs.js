import { useState ,useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (categoria) => {
    const [images, setImages] = useState([])
    
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs(categoria)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {//en este caso el useEffect ocasiona que la ejecución de getGifs se ejecute solo la primera vez que se construye el componente, y no cada que se reconstruya
        getImages()
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }
}
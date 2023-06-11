import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({categoria}) => {

    const {images, isLoading} = useFetchGifs(categoria)//esto es un custom hook

    return (
        <>
            <h3>{categoria}</h3>

            {
                isLoading ? (<h2>Cargando...</h2>) : null
            }

            <div className="card-grid">
                {
                    images.map(image => (
                        <GifItem image={image} key={image.id} />
                    ))
                }
            </div>
        </>
    )
}
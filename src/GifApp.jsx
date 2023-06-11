import {useState} from 'react'
import {AddCategoria, GifGrid} from './components'

export const GifApp = () => {
    const [categorias, setCategorias] = useState(['Pokemon','The Office'])

    const addCategoria = (value) => {
        if(categorias.includes(value)) return
        setCategorias([value, ...categorias])
    }

    return (
        <>
            <h1>Gif App</h1>

            {/* enviamos la función de agregar el valor al otro componente para allí añadir el nuevo valor */}
            <AddCategoria addCategoria={(value) => addCategoria(value)} />

            {
                categorias.map(categoria => (
                    <GifGrid key={categoria} categoria={categoria}/>
                ))
            }
        </>
    )
}
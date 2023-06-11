import { useState } from "react"

export const AddCategoria = ({addCategoria}) => {
    const [inputValue, setInputValue] = useState('')
    
    const inputChange = (event) => {
        setInputValue(event.target.value)
    }

    const enviarCategoria = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return

        addCategoria(inputValue.trim())

        setInputValue('')
    }

    return (
        <form onSubmit={(event) => enviarCategoria(event)}>
            <input type="text" placeholder="Buscar Gif" value={inputValue} onChange={(event) => inputChange(event)} />
        </form>
    )
}
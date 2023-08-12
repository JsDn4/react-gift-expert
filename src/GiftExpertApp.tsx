import React, { useState } from "react"
import { GiftGrid, AddCategory } from "./components";

const GiftExpertApp: React.FC = () => {

    const [categorias, setCategorias] = useState<string[]>([])

    //1. Definir la funcion con sus argumentos
    const onAddCategory = (nuevaCategoria: string) => {

        // setCategorias((currentCategory) => [...currentCategory, 'Hola mundo'])

        if (!categorias.includes(nuevaCategoria))
            setCategorias([nuevaCategoria, ...categorias])

    }



    return (

        <>
            {/* titulo */}
            <h1>Gift Expert App</h1>

            {/* input */}

            {/* //4 Madamos llamar todo lo necesario
            //Se manda llamar la propiedad y se asigna la funcion
            //El valor viene desde el otro archivo */}
            <AddCategory onAddCategory={onAddCategory} />


            {categorias.map(categoria => {
                return (
                    <GiftGrid
                        key={categoria}
                        categoria={categoria}
                    />
                )
            })}


            {/* grid */} {/* => */} {/* items */}

        </>

    )
}


export const App = () => {
    return (

        <>
            <GiftExpertApp />
        </>

    )
}
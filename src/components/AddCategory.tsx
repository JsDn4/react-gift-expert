import { useState } from "react"
import React from 'react';
import { type AddCategoryProps } from "../types";

export const AddCategory: React.FC<AddCategoryProps> = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState<string>('')

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value

        setInputValue(value)

    }

    const onSubmitChange = (e: React.ChangeEvent<HTMLFormElement>) => {

        e.preventDefault()

        const newInputValue = inputValue.trim()

        if (newInputValue.length < 1) { return }

        // //3
        // //Mandamos llamar la funcion
        onAddCategory(newInputValue)

        setInputValue('')



    }

    return (
        <>
            <form onSubmit={onSubmitChange}>
                <input

                    type="text"
                    placeholder="Buscar"
                    value={inputValue}

                    onFocus={focus}
                    onChange={onInputChange}
                />

            </form>

        </>
    )
}


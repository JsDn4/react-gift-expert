
//Tipo de datos en la iterface de AddCategory
export interface AddCategoryProps {

    //2
    //Esto proviene del archivo GiftExpertApp en la funcion de onAddCategory
    //Entonces los argumentos de la funcion lo mandamos como propiedad
    onAddCategory: (nuevaCategoria: string) => void
}


export interface GiftGridCategoria {
    categoria: string
}

export interface GyphyImage {
    id: string
    title: string
    images: {
        downsized_medium: {
            url: string
        }
    }
}

export type ListOfImages = Array<GyphyImage>
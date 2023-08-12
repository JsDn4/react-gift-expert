import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifts"
import { type ListOfImages } from '../types';

export const useFetchGifts = (categoria: string) => {

    const [gifts, setGifts] = useState<ListOfImages>([])

    const [isLoading, setIsLoading] = useState<boolean>(true)


    const getImages = async () => {

        const newImages = await getGifts(categoria)

        setGifts(newImages)
        setIsLoading(false)

    }


    //Use effect se usa para los efectos secundarios
    useEffect(() => {

        getImages()

    }, [])

    return {
        gifts,
        isLoading
    }

}

import { useFetchGifts } from "../hooks/useFetchGifts";
import { type GyphyImage, type GiftGridCategoria } from '../types';
import { GiftGridItem } from "./GiftGridItem";




export const GiftGrid: React.FC<GiftGridCategoria> = ({ categoria }) => {

    const { gifts, isLoading } = useFetchGifts(categoria)

    return (
        <>

            <h3>{categoria}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)

            }

            <div className="card-grid">

                {
                    gifts.map((gift: GyphyImage) => {
                        return (


                            <GiftGridItem
                                key={gift.id}

                                //Exparse todas las propiedades
                                {...gift}

                            />
                        )
                    })
                }


            </div >

        </>
    )
}


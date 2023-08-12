import { type GyphyImage } from '../types';


export const GiftGridItem: React.FC<GyphyImage> = ({
    id,
    title,
    images }) => {
    return (
        <div className="card" key={id}>

            <img src={images.downsized_medium.url} alt={title} />

            <p>{title}</p>

        </div>
    )
}

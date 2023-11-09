import axios from 'axios';
import { type GyphyImage } from '../types';


export const getGifts = async (categoria: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nQt9u7nUQInSmK4P04odXdG9j7LhfkdQ&q=${categoria}&limit=10`;

    const resp = await axios.get(url);
    const { data } = await resp.data;

    const gifts = data.map((img: GyphyImage) => ({
        id: img.id,
        title: img.title,
        images: {
            downsized_medium: {
                url: img.images.downsized_medium.url
            }
        },
    }));

    return gifts;
};







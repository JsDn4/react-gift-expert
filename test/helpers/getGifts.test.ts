import { getGifts } from "../../src/helpers/getGifts";
import { GyphyImage } from "../../src/types";

describe('pruebas getGifts', () => {
    test('debe de retornar 10 elementos', async () => {
        const gifts = await getGifts('saitama');
        expect(gifts.length).toBeGreaterThan(0);

        expect(gifts[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            images: {
                downsized_medium: {
                    url: expect.any(String)
                }
            }
        });
    });

    test('La url tiene que ser valida', async () => {

        const gifts: Array<GyphyImage> = await getGifts('saitama');
        const url = gifts[0].images.downsized_medium.url;

        expect(url.startsWith('https://')).toBe(true);
    });
});
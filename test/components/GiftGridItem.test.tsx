import { render } from '@testing-library/react';
import { GyphyImage } from '../../src/types';
import { GiftGridItem } from '../../src/components/GiftGridItem';

describe('Pruebas en <GiftGridItem />', () => {
    test('debe de mostrar el componente correctamente', () => {
        const gif: GyphyImage = {
            id: 'ABC',
            title: 'Un titulo',
            images: {
                downsized_medium: {
                    url: 'https://localhost/cualquiercosa.jpg'
                }
            }
        }

        const wrapper = render(<GiftGridItem {...gif} />);
        expect(wrapper).toMatchSnapshot();


    });

    test('debe de mostrar la imagen y el alt indicado', () => {

        const gif: GyphyImage = {
            id: 'ABC',
            title: 'Un titulo',
            images: {
                downsized_medium: {
                    url: 'https://localhost/cualquiercosa.jpg'
                }
            }
        }

        const wrapper = render(<GiftGridItem {...gif} />);

        // const img = wrapper.getByRole('img').getAttribute('alt');
        // expect(img).toBe(gif.title);

        const img = wrapper.getByRole('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');

        expect(src).toBe(gif.images.downsized_medium.url);
        expect(alt).toBe(gif.title);


    });

    test('debe de tener un titulo en el parrafo', () => {

        const gif: GyphyImage = {
            id: 'ABC',
            title: 'Un titulo',
            images: {
                downsized_medium: {
                    url: 'https://localhost/cualquiercosa.jpg'
                }
            }
        }

        const wrapper = render(<GiftGridItem {...gif} />);

        const p = wrapper.getByText(gif.title).textContent;
        expect(p).toBeTruthy();

    });

});

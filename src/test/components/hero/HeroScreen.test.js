import { HeroScreem } from "../../../components/hero/HeroScreem"
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route,Routes} from 'react-router-dom';



const mockNavigate =jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate,
}))


describe('pruebas en HeroScreem', () => {  
    test('no debe de mostrar el HeroScreem si no hay un heroe', () => {  

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreem/>}/>
                    <Route path="/" element={<h1>No Hero Page</h1>}/>

                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.find('h1').text().trim()).toBe('No Hero Page');


    });
    test('debe de mostrar un heroe si el parametro existe y se encuantra', () => {  

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreem/>}/>
                    <Route path="/" element={<h1>No Hero Page</h1>}/>

                </Routes>
            </MemoryRouter>
        );
       
            expect(wrapper.find('.row').exists()).toBe(true);

    });

    test('debe de regresar a la pantalla anterior', () => { 

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreem/>}/>
                </Routes>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    test('debe de mostrar el No Hero Page si no tenemos un heroe', () => {  

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider54545452']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreem/>}/>
                    <Route path="/" element={<h1>No Hero Page</h1>}/>

                </Routes>
            </MemoryRouter>
        );
       
            expect(wrapper.text()).toBe('No Hero Page');

    });
})

        



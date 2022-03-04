import { mount } from "enzyme"
import { SearchScreem } from "../../../components/serach/SearchScreem"
import React from 'react';
import { MemoryRouter } from "react-router-dom";


const mockNavigate =jest.fn();
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockNavigate,

}));


describe('pruebas en SearchScreem', () => {  

    test('debe de mostrarse correctamente con valores por defecto', () => {  
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                 <SearchScreem/>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un heroe');
    });

    test('debe de mostar a batman y el input con el valor del queryString', () => {  

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                 <SearchScreem/>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value')).toBe('batman');
    });

    test('debe de mostrar un error si no hay resultados', () => {  
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                 <SearchScreem/>
            </MemoryRouter>
        );

        expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay resultados: batman123');
    });

    test('debe de llamar al navigate a la nueva pantalla', () => { 
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                 <SearchScreem/>
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change',{
            target: {
                name:'BuscarText',
                value: 'batman',
            }
        });
        wrapper.find('form').prop('onSubmit')({
            preventDefault: ()=>{}

        })
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');




    });


})
            

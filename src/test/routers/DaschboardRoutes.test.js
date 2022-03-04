import { mount } from "enzyme"
import { DaschboardRoutes } from "../../routers/DaschboardRoutes";
import React from 'react';
import { AuthContext } from "../../auth/authContext";
import { MemoryRouter } from "react-router-dom";




describe('pruebas en DaschboardRoutes', () => {  

    const contextValue={
        user:{
            logged:true,
            name:'Delmer'
        }
    }

    test('debe de mostrarse correctamente en Marvel', () => { 
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <DaschboardRoutes/>
                </MemoryRouter>                 
            </AuthContext.Provider>     
            
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Delmer');
        expect(wrapper.find('h1').text().trim()).toBe('MarvelScreem');
       
    });
    
    test('debe de mostrarse correctamente en DC', () => { 
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DaschboardRoutes/>
                </MemoryRouter>                 
            </AuthContext.Provider>     
            
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('DcScreen');

       
    });
})
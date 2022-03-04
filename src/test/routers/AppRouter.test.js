import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../routers/AppRouter';
import React from 'react';




describe('pruebas en el AppRouter', () => { 
    
   

    test('debe de mostrar el login si no esta autenticado', () => {  
        const contextValue={
            user: {
                logged:false
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login')

        
    });
    test('debe de mostrar el componente del marvel si esta autenticado', () => {  
        const contextValue={
            user: {
                logged:true, 
                name: 'Delmer'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
            </AuthContext.Provider>
        );
        

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
        
    });
   
})
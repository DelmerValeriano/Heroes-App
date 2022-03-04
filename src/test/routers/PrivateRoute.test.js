import React from 'react';
import { MemoryRouter } from "react-router-dom";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from '../../routers/PrivateRoute';

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    Navigate: ()=><span>Saliendo de aqui</span>
}))


describe('pruebas en PrivateRoute', () => {  
    Storage.prototype.setItem =jest.fn();

    test('debe de mostra el componente si esya autenticando y guardar en el localStorage', () => { 
        const ContextValues ={
        
            user:{
                logged: true,
                name: 'Delmer'
            }
        }
    
        const wrapper =mount(
            <AuthContext.Provider value={ContextValues}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Componente</h1>

                    </PrivateRoute>

                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.text().trim()).toBe('Private Componente');
        expect(localStorage.setItem).toHaveBeenCalledWith('listPath','/');
                
    });
    test('debe de bloquear el compnente si no esta autenticado', () => { 
        const ContextValues ={
        
            user:{
                logged: false,
            }
        } 


        const wrapper =mount(
            <AuthContext.Provider value={ContextValues}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Componente</h1>

                    </PrivateRoute>

                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.text().trim()).toBe('Saliendo de aqui');
    })


                
})
            



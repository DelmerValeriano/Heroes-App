
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route,Routes} from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';


const mockNavigate =jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate,
}))


describe('pruebas en el navbar', () => {  

    const ContextValues ={
        dispatch: jest.fn(),
        user:{
            name:'Delmer', 
            logged: true,

        }
    }
   

    const wrapper =  mount(
        <AuthContext.Provider value={ContextValues}>
             <MemoryRouter initialEntries={['/']}>
                 <Routes>
                   <Route path="/" element={<Navbar/>}/>
                 </Routes>
             </MemoryRouter>
        </AuthContext.Provider>
       
    );


    test('debe de mostrar correctamente', () => {  
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Delmer');
    });
                
    test('debe de llamar el logout, llamar el vavigate y el dispatch de los argumentos', () => {  

        wrapper.find('button').prop('onClick')();
        expect(ContextValues.dispatch).toHaveBeenCalledWith({'type': types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login',{replace:true});
    });


});
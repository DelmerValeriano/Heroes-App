import { mount } from "enzyme";
import { LoginScreen } from "../../../components/login/LoginScreen";
import React from 'react';
import { MemoryRouter, Route,Routes} from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { types } from '../../../types/types';

const mockNavigate =jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate,
}))




describe('pruebas en LoginScreen', () => {  
    const ContextValues ={
        dispatch: jest.fn(),
        user:{
            logged: false,
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ContextValues}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/" element={<LoginScreen/>}/>
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>     
    );

    test('debe de hacer match con el snapshot', () => {  

        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de realizar el dispatch y la navegacion', () => {  

        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect(ContextValues.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {name:'Delmer'}
        });

        expect(mockNavigate).toHaveBeenCalledWith('/marvel',{"repalece": true});

        handleClick();
        localStorage.setItem('lasPath','/dc');
        expect(mockNavigate).toHaveBeenCalledWith('/dc',{"repalece": true});

    })

});



import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"





describe('pruebas en authReducer', () => {  

    test('debe de retoranar el estado por defecto', () => {  

        const state =authReducer({logged: false},{});

        expect(state).toEqual({logged: false});

    });

    test('debe de auntenticar el "name" del usuario', () => {  

        const action={
            type: types.login,
            payload :{
                name: 'Delmer'
            }
        };

        const state =authReducer({logged: false},action);
        expect(state).toEqual({logged: true, name: 'Delmer'});

    });

    test('debe de borrar el name del usuario y el false', () => {  

        const action={
            type: types.logout,
        };
        const state =authReducer({logged: true,name: 'Delmer'},action);
        expect(state).toEqual({logged: false});


    })

})

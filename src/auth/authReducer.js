import { types } from "../types/types"

// const state = {
//     name: 'Allan',  Este es el State (idea)
//     logged: true
// }

// const loginAction = {
//     type: types.login,
//     payload: {
//         name: 'Allan',     Este es el action, asi luce la accion que se le manda.
//         email: 'allan@gmail.com'
//     }
// }


export const authReducer = (state = {}, action) => { 

    switch ( action.type ) { 
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout: 
            return {
                logged: false
            }

        default:
            return state; 
    }

    

}
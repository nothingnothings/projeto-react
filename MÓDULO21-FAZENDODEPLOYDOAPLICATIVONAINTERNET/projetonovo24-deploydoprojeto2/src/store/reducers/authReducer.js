
import * as authActionTypes from '../actions/authActionTypes';


import { updateObject } from '../../shared/utility';



const initialState = {
        token: null,
        userId: null,
        error: null,
        loading: false,
        email: null,
        authRedirectPath: '/'
        // createdBurger: false
}


// const burgerCreate = (state, action) => {
//     return updateObject(state, {
//         createdBurger: true
//     })
// }


// const burgerFinished = (state, action) => {
//     return updateObject(state, {
//         createdBurger: false
//     })
// }




const authStart = (state, action) => {
        return updateObject(state, {loading: true, error: null})
}



const authSuccess = (state, action) => {
    return updateObject(state, {
                loading: false,
                error: null,
                // token: action.authData.idToken,
                // userId: action.authData.localId
                token: action.token,
                userId: action.userId,
                email: action.email


    })
}


const authFail = (state, action) => {
    return updateObject(
        state, {
            error: action.error,
            loading: false
        }
    )
}



const authLogout = (state, action) => {
        return updateObject(state,
            
            {
                token: null,
                userId: null,
                email: null
            }
            
            
            )
}



const setAuthRedirectPath = (state, action) => {
    return updateObject(state, {authRedirectPath: action.path})
}




 const authReducer = (state = initialState, action) => {
        switch(action.type) {
                    case authActionTypes.AUTH_START:
                        return authStart(state, action);
                    case authActionTypes.AUTH_SUCCESS: 
                        return authSuccess(state, action);
                        case authActionTypes.AUTH_FAIL:
                            return authFail(state, action);
                        case authActionTypes.AUTH_LOGOUT:
                            return authLogout(state, action);
                        default: return state;
                        // case authActionTypes.BURGER_CREATED_WITHOUT_AUTH:  //meu approach, diferente daquele que o professor usou. Não é tão dinâmico.
                        //     return burgerCreate(state, action);
                        // case authActionTypes.BURGER_FINISHED_PURCHASING:
                        //     return burgerFinished(state, action);
                        case authActionTypes.SET_AUTH_REDIRECT_PATH:
                                return setAuthRedirectPath(state, action);
              
        }
}






export default authReducer;
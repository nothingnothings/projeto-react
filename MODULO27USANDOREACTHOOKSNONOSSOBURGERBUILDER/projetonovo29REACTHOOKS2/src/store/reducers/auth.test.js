import reducer from './authReducer';



import * as actionTypes from '../actions/authActionTypes';









describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})) ////EIS O CÓDIGO EM QUESTÃO.
        .toEqual(
            {
                token: null,
                userId: null,
                error: null,
                loading: false,
                email: null,
                authRedirectPath: '/'
            }
        )
    });

    it('should store the token upon login', 
() => {
    expect(reducer({
        token: null,
        userId: null,
        error: null,
        loading: false,
        email: null,
        authRedirectPath: '/'
    },                      {type: actionTypes.AUTH_SUCCESS, 
                             token: 'dummy',
                            userId: 'dummyUserId',
                        email: 'dummyEmail'       })).toEqual(
        {
                            token: 'dummy', ////TIPO ASSIM, CREIO EU...
                userId: 'dummyUserId',
                error: null,
                loading: false,
                email: 'dummyEmail',
                authRedirectPath: '/'


        }
    )
}
    )



})

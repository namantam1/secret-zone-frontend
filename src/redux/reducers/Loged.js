import * as actionTypes from '../action/ActionTypes'

const initialState = {
    loading: true,
    isLogin: false,
    isLogout: false,
    user: {}
}

const isLogged = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                isLogin: true,
                isLogout:false,
                user: action.payload.user,
                // token: action.payload.token
            }

        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                isLogin: false,
                isLogout: true
            }

        case actionTypes.SWITCH_LOAD:
            return {...state, loading: !state.loading}    
    
        default:
            return state
    }
}

export default isLogged;
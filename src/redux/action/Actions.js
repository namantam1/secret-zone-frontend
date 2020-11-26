import * as actionTypes from './ActionTypes'

export const update_self_userid = (id) => ({type:actionTypes.UPDATE_SELF_USERID,payload:id});

export const increament = () => {
    return {
        type: 'INCREAMENT'
    }
}

export const save_rooms = (rooms) => {
    return {
        type: actionTypes.SAVE_ROOMS,
        payload: rooms
    }
}

// export const update_self = (user) => {
//     return {
//         type: actionTypes.UPDATE_SELF,
//         payload: user
//     }
// }

export const current_status = (id) => {
    return {
        type: actionTypes.CURRENT_STATUS,
        payload: id
    }   
}

export const upadte_ws = (ws) => {
    return {
        type: actionTypes.UPDATE_WS,
        payload: ws
    }
}

export const update_message = (message) => {
    return {
        type: actionTypes.UPDATE_MESSAGE,
        payload: message
    }
}

export const online_status = (data) => {
    return {
        type: actionTypes.ONLINE_STATUS,
        payload: data
    }
}

export const update_message_status = (data) => {
    return {
        type: actionTypes.UPDATE_MESSAGE_STATUS,
        payload: data
    }
}

export const update_autheticated = (data) => {
    return {
        type: actionTypes.UPDATE_AUTHENTICATED,
        payload: data
    }
}

export const login_user = (user) => {
    return {
        type: actionTypes.LOGIN_USER,
        payload: {
            user: user,
            // token: token
        }
    }
}

export const connect_websocket = (ws) => {
    return {
        type: actionTypes.CONNECT_WEBSOCKET,
        payload: ws
    }
}

export const logout_user = () => ({type:actionTypes.LOGOUT_USER})

export const switch_load = () => ({type:actionTypes.SWITCH_LOAD})
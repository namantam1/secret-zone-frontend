// import {save_rooms} from '../actions/Actions'
import * as actionTypes from "../action/ActionTypes"

const mystate = {
    rooms: [],
    activeRoomId: 0,
    self_user_id: 0,
    textValue: "",
    ws: null,
    wsPath: "ws://127.0.0.1:8000/ws/v1/?token=ca80a05c0c91e871d29ef017b8f2b488955407eb"
};

const Rooms = (state=mystate, action) => {
    // console.log(state, action, "naman")
    switch (action.type) {
        case actionTypes.UPDATE_SELF_USERID:
            return {
                ...state,
                self_user_id: action.payload
            }

        case "save_rooms":
            return {
                ...state,
                rooms: [
                    ...state.rooms,
                    ...action.payload
                ]
            }

        case actionTypes.CURRENT_STATUS:
            // console.log("cardCLickevent:main.js:37")
            return {
                ...state,
                activeRoomId: action.payload
            }

        case "upadte_ws":
            return {
                ...state,
                ws: action.payload
            }

        case "update_message":
            const roomId = action.payload.roomId
            // console.log(action, state, "main.js:50")
            const new_state = {
                ...state,
                rooms: state.rooms.map(room => {
                    // console.log(room, roomId)
                    if(room.id === roomId){
                        return {
                            ...room,
                            chats: [...room.chats, action.payload]
                        }
                    }
                    return room;
                })
            }
            // console.log(new_state, "main.js:63")
            return new_state

        case "online_status":
            const online_state = {
                ...state,
                rooms: state.rooms.map(room => {
                    // console.log(room, action, "main.js:71")
                    if(room.id === action.payload.roomId && action.payload.user.id !== state.self_user_id){
                        return {
                            ...room,
                            user: action.payload.user
                        }
                    }
                    return room;
                })
            }
            return online_state
        
        case "update_message_status":
            return {
                ...state,
                rooms: state.rooms.map(room => {
                    // console.log(room, action, "main.js:71")
                    if(room.id === action.payload.roomId && action.payload.user.id !== state.self_user_id){
                        return {
                            ...room,
                            chats: room.chats.map(chat => {
                                return {
                                    ...chat,
                                    seen: true
                                }
                            })
                        }
                    }
                    return room;
                })
            }

        case actionTypes.CONNECT_WEBSOCKET:
            return {
                ...state,
                ws: action.payload
            }

        default:
            return state;
    }
}

export default Rooms;
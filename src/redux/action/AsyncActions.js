import * as actions from './Actions'
import websocket from './../../websocket'
import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_BASE_URL

const fetch_user = () => axios.get(BASE_URL + '/user/', {
    headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access")}`
    }
})

function refresh(dispatch) {
    axios.post(BASE_URL + '/token/refresh/', {
        refresh: sessionStorage.getItem("refresh")
    })
        .then(response => {
            if (response.status === 200) {
                console.log(response, "refresh response:async.js:11");
                sessionStorage.setItem("access", response.data.access)
                fetch_user().then(response => {
                    if (response.status === 200) {
                        dispatch(actions.switch_load());
                        dispatch(actions.login_user(response.data));
                        dispatch(actions.update_self_userid(response.data.id));
                    }
                    else
                        logout(dispatch);
                })
                    .catch(error => {
                        console.log(error.response, "refresh:async.js:28");
                        logout(dispatch);
                    })
            }
            else {
                console.log("response not 200:async.js:14");
                logout(dispatch);
            }
        })
        .catch(error => {
            console.log(error.response, "refresh:async.js:38");
            logout(dispatch);
        })
}

function logout(dispatch) {
    sessionStorage.clear();
    dispatch(actions.logout_user());
    dispatch(actions.switch_load());
}

export const check_login_user = () => {
    return dispatch => {
        if (sessionStorage.getItem("access")) {
            fetch_user()
                .then(response => {
                    if (response.status === 200) {
                        dispatch(actions.switch_load());
                        dispatch(actions.login_user(response.data));
                        dispatch(actions.update_self_userid(response.data.id));
                    }
                    else {
                        console.log("then async:13")
                        refresh(dispatch);
                    }
                })
                .catch(error => {
                    console.log("catch async:19")
                    console.log(error.response)
                    refresh(dispatch)
                })
        }
        else {
            // console.log("else async:26", dispatch)
            logout(dispatch)
        }
    }
}

export const intialize_ws = () => {
    return dispatch => {
        const ws = websocket();
        dispatch(actions.connect_websocket(ws));
    }
}

export const send_current_status = (ws, id) => {
    return dispatch => {
        if (id !== 0 && ws) {
            ws.send(JSON.stringify({
                type: "update_message_status",
                roomId: id
            }));
        }
        dispatch(actions.current_status(id));
    }
}
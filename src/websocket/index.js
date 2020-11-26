import rcwebsocket from 'reconnecting-websocket'
import store from '../redux/Store'
import * as actions from '../redux/action/Actions'

const WS_URL = process.env.REACT_APP_WS_BASE_URL

export default function websocket() {
  const ws = new rcwebsocket(WS_URL + "?token=" + sessionStorage.getItem("access"));
  
  ws.addEventListener("message", data => {
    const parsed_data = JSON.parse(data.data)
    console.log(parsed_data, "websocket.js:11")
    if(parsed_data.type === "message") {
      store.dispatch(actions.update_message(parsed_data.message))
    }
    else if(parsed_data.type === "online_status") {
      store.dispatch(actions.online_status(parsed_data))
    }
    else if(parsed_data.type === "update_message_status") {
      store.dispatch(actions.update_message_status(parsed_data))
    }
    // store.dispatch()
  })
  
  return ws;
}
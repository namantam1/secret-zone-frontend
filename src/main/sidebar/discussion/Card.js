import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { send_current_status } from '../../../redux/action/AsyncActions'

function Card(props) {
    const dispatcher = useDispatch()
    const activeRoomId = useSelector(state => state.rooms.activeRoomId)
    const ws = useSelector(state => state.rooms.ws)
    const user = props.room.user
    const room = props.room
    const last_message = room.chats[room.chats.length - 1].text
    return (
        <a href="#list-chat" onClick={() => (activeRoomId===0 || activeRoomId!==room.id) ? dispatcher(send_current_status(ws, room.id)) : false} className="filterDiscussions all unread single" id="list-chat-list" data-toggle="list" role="tab">
            <img className="avatar-md" src={user.image} data-toggle="tooltip" data-placement="top" title="Michael" alt="avatar" />
            <div className={user.online? "status online": "status offline"} />
            <div className="data">
                <h5>{user.username}</h5>
                {/* <p>{user.email}</p> */}
                {room.unseenCount!==0 ? <div className="new bg-green">
                <span>{room.unseenCount}+</span>
                </div>:""}
                <span>Sun</span>
                <p title={last_message}>{last_message.substring(0,10)}...</p>
            </div>
        </a>
    )
}

export default Card

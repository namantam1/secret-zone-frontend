import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import Chat from './Chat'
import moment from 'moment'

export default function Content() {
    const messagesEndRef = useRef(null)
    const room = useSelector(state => state.rooms.activeRoomId)

    const scrollToBottom = (beh) => {
        messagesEndRef.current.scrollIntoView(beh)
    }

    const date = (date) => (
        <div className="date">
            <hr />
            <span>{moment(date).calendar().split(" ")[0]}</span>
            <hr />
        </div>
    )

    const state = useSelector(state => {
        const room_id = state.rooms.activeRoomId
        const active_room = state.rooms.rooms.filter(room => room.id === room_id)[0]
        // console.log(active_room)
        if (active_room) {
            // console.log(active_room.chats, "content.js, 11")
            return active_room.chats.map((chat, i) => {
                const chat_ht = <Chat key={chat.chatId} chat={chat} user={active_room.user}/>
                if(i===0 || (chat.timestamp - active_room.chats[i-1].timestamp)/(24*60*60*1000) > 1){
                    return (
                        <Fragment key={chat.chatId}>
                        {date(chat.timestamp)}
                        {chat_ht}
                        </Fragment>
                    )
                }
                return chat_ht
            })
        }
        return ""
    })

    // console.log(state, "this is state:44")

    useEffect(() => {scrollToBottom()},[room]);
    useEffect(() => {scrollToBottom({ behavior: "smooth" })},[state]);

    // const empty = (
    //     <div className="content empty">
    //         <div className="container">
    //             <div className="col-md-12">
    //                 <div className="no-messages">
    //                     <i className="ti-comments" />
    //                     <p>Seems people are shy to start the chat. Break the ice send the first message.</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div className="content" id="content">
            <div className="container">
                <div className="col-md-12">
                    {state}
                    <div ref={messagesEndRef} />
                </div>
            </div>
        </div>

    )
}

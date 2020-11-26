import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

export default function Chat(props) {
    const self_user = useSelector(state => state.auth.user)
    // console.log(self_user, "chat:6")
    const user = props.user
    const chat = props.chat
    const status = (chat) => {
        if(chat.seen) {
            return <i className="ti-check-box blue"/>
        }
        else if (chat.delivered) {
            return <i className="ti-check-box"/>
        }
        else {
            return <i className="ti-check"/>
        }
    }
    const message = (user, chat) => (
        <div className="message">
            <img className="avatar-md" src={user.image} data-toggle="tooltip" data-placement="top" title="Karen joye" alt="avatar" />
            <div className="text-main">
                <div className="text-group">
                    <div className="text">
                        <p>{chat.text}</p>
                    </div>
                </div>
                <span>{moment(chat.timestamp).format('LT')}</span>
            </div>
        </div>
    )
    const message_me = (user, chat) => (
        <div className="message me">
            <div className="text-main">
                <div className="text-group me">
                    <div className="text me">
                        <p>{chat.text}</p>
                    </div>
                    
                </div>
                <span>{moment(chat.timestamp).format('LT')} { status(chat) }</span>
            </div>
        </div>
    )

    if(chat.user !== self_user.id) {
        return message(user, chat);
    }
    return message_me(self_user, chat)
}


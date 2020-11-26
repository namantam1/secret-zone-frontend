import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { current_status } from '../../redux/action/Actions'
import moment from 'moment'

export default function Top() {
    const dispatcher = useDispatch()

    const room = useSelector(state => {
        const room_id = state.rooms.activeRoomId
        const active_room = state.rooms.rooms.filter(room => room.id===room_id)[0]
        // console.log(active_room)
        // if(active_room === undefined && !active_room){
        //     return {
        //         user: "",
        //         image: ""
        //     }
        // }
        // return {
        //     user: active_room.user.username,
        //     image: active_room.user.image
        // }
        return active_room;
    })

    // console.log(room, "active_room Top.js:24")

    if(room){
        const user = room.user;

        return (
            <div className="top">
                <div className="container">
                    <div className="col-md-12">
                        <div className="inside">
                            <img className="avatar-md" src={user.image} data-toggle="tooltip" data-placement="top" title="Michael" alt="avatar" />
                            <div className={user.online? "status online": "status offline"} />
                            <div className="data">
                                <h5><a href="#test">{user.username}</a></h5>
                                {user.online ? <span>Active now</span>: <span>Last seen {moment(user.lastSeen).calendar()}</span>}
                                
                            </div>
                            <button className="btn d-md-block d-none" title="More Info">
                                <i className="ti-info" />
                            </button>
                            <div className="dropdown">
                                <button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="ti-view-grid" />
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="#test" className="dropdown-item"><i className="ti-server" />Clear History</a>
                                    <a href="#test" className="dropdown-item"><i className="ti-hand-stop" />Block Contact</a>
                                    <a href="#test" className="dropdown-item"><i className="ti-trash" />Delete Contact</a>
                                </div>
                            </div>
                            <button onClick={() => dispatcher(current_status(0))} className="btn back-to-mesg" title="Back">
                                <i className="ti-arrow-right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    } else {
        return ""
    }
}

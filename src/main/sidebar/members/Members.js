import React from 'react'
import Fig from '../../ProFigure.js'
import Card from './Card'
import { useSelector } from 'react-redux'

export default function Members() {
    const rooms = useSelector(state => state.rooms.rooms)
    const cards = rooms.map(data => {
        // console.log(data)
        return(
            <Card key={data.id} rooms={data}/>
        )
    })
    return (
        <div className="tab-pane fade" id="members">
            <Fig />
            <span className="logo"><img alt="" src="dist/img/logo.png" /></span>
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="people" placeholder="Search for people..." />
                    <button type="button" className="btn btn-link loop"><i className="ti-search" /></button>
                </form>
            </div>

            <div className="list-group sort">
                <button className="btn filterMembersBtn active show" data-toggle="list" data-filter="all">All</button>
                <button className="btn filterMembersBtn" data-toggle="list" data-filter="online">Online</button>
                <button className="btn filterMembersBtn" data-toggle="list" data-filter="offline">Offline</button>
            </div>
            <div className="contacts">
                <h1>Contacts</h1>
                <div className="btn-group add-group" role="group">
                    <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add +
                                        </button>
                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <button className="dropdown-item btn" data-toggle="modal" data-target="#exampleModalCenter">New user</button>
                        <button className="dropdown-item btn">New Group +</button>
                    </div>
                </div>
                <div className="list-group" id="contacts" role="tablist">
                    { cards }
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Fig from '../../ProFigure.js'
import Card from './Card'
import { useSelector } from 'react-redux'

export default function Discussion() {
    const rooms = useSelector(state => state.rooms.rooms)
    const cards = rooms.map(data => {
        // console.log(data)
        return(
            <Card key={data.id} room={data}/>
        )
    })
    return (
        <div id="discussions" className="tab-pane fade in active show">
            <Fig />
            <span className="logo"><img src="dist/img/logo.png" alt="" /></span>
            <div className="search">
                <form className="form-inline position-relative">
                    <input type="search" className="form-control" id="conversations" placeholder="Search for conversations..." />
                    <button type="button" className="btn btn-link loop"><i className="ti-search" /></button>
                </form>
                <button className="btn create" data-toggle="modal" data-target="#startnewchat"><i className="ti-pencil" /></button>
            </div>
            <div className="list-group sort">
                <button className="btn filterDiscussionsBtn active show" data-toggle="list" data-filter="all">All</button>
                <button className="btn filterDiscussionsBtn" data-toggle="list" data-filter="read">Favourit</button>
                <button className="btn filterDiscussionsBtn" data-toggle="list" data-filter="unread">Unread</button>
            </div>
            <div className="discussions" id="scroller">
                <h1>Chats</h1>
                <div className="list-group" id="chats" role="tablist">
                    {cards}
                </div>
            </div>
        </div>
    )
}


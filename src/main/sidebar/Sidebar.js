import React from 'react'
import Discussion from './discussion/Discussion.js'
import Members from './members/Members.js'
import Notification from './notification/Notification.js'
import { useSelector } from 'react-redux' 

export default function Sidebar() {
    const sidebar_open = useSelector(state => state.ui.sidebar_open)
    return (
        <div className={ sidebar_open ?"sidebar slide":"sidebar"} id="sidebar">
            <div className="container">
                <div className="col-md-12">
                    <div className="tab-content">
                        <Members />
                        <Discussion />
                        <Notification/>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { Fragment } from 'react'

function Card(props) {
    // console.log(props)
    const user = props.rooms.user
    return (
        <Fragment>
            <a href="#list-chat" className="filterMembers all online contact" data-toggle="list" role="tab">
                <img className="avatar-md" src={user.image} data-toggle="tooltip" data-placement="top" title="Sarah" alt="avatar" />
                <div className="status online" />
                <div className="data">
                    <h5>{user.username}</h5>
                    <p>{user.email}</p>
                </div>
                <div className="person-add">
                    <i className="ti-user" />
                </div>
            </a>
            {/* <a href="#list-empty" className="filterMembers all online contact" data-toggle="list">
                <img className="avatar-md" src="dist/img/avatars/avatar-male-1.jpg" data-toggle="tooltip" data-placement="top" title="Bob Frank" alt="avatar" />
                <div className="status online" />
                <div className="data">
                    <h5>Bob Frank</h5>
                    <p>Washington, USA</p>
                </div>
                <div className="person-add">
                    <i className="ti-user" />
                </div>
            </a> */}
        </Fragment>
    )
}

export default Card

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { switch_dark_mode } from '../../redux/action/UiActions'

export default function Navigation() {
    const dispatch = useDispatch();
    const sidebar_open = useSelector(state => state.ui.sidebar_open);
    const dark_mode = useSelector(state => state.ui.dark_mode);
    const logout = () => {sessionStorage.clear();window.location.reload();}

    return (
        <div className={sidebar_open? "navigation active": "navigation"}>
            <div className="container">
                <div className="inside">
                    <div className="nav nav-tab menu">
                        <a href="#members" data-toggle="tab" title="All members">
                            <i className="ti-home" />
                            All Friends
                        </a>
                        <a href="#discussions" data-toggle="tab" className="active" title="Chat">
                            <i className="ti-comment-alt" />
                            Recent Chat
                        </a>
                        <a href="#blank" onClick={() => dispatch(switch_dark_mode())} id="dark" className="dark-theme" title="Use Night Mode">
                            <i className="ti-wand" />
                            {dark_mode?"Day Mode":"Night Mode"}
                        </a>
                        <a href="/#logout" onClick={logout} className="btn power" title="Sign Out">
                            <i className="ti-power-off" />
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
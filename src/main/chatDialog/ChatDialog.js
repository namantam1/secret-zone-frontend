import React from 'react'
import Top from './Top'
import Content from './content/Content'
import TextBox from './TextBox'
import { useSelector } from 'react-redux'


export default function ChatDialog() {
    const activeRoomId = useSelector(state => state.rooms.activeRoomId)
    // console.log(activeRoomId, "chatdialog:10")

    return (
        <div className={activeRoomId!==0?"main show":"main"} id="chat-dialog">
            <div className="tab-content" id="nav-tabContent">
                <div className="babble tab-pane fade active show" id="list-chat" role="tabpanel" aria-labelledby="list-chat-list">
                    <div className="chat" id="chat1">
                        <Top/>
                        <Content/>
                        <TextBox/>
                    </div>
                </div>
    
                {/* <div className="babble tab-pane fade" id="list-empty" role="tabpanel" aria-labelledby="list-empty-list">
                    <div className="chat" id="chat">
                        <div className="top">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="inside">
                                        <div className="status offline" />
                                        <div className="data">
                                            <h5><a href="#test">Bob Frank</a></h5>
                                            <span>Inactive</span>
                                        </div>
                                        <button className="btn d-md-block d-none audio-call" title="Audio call"><i className="ti-headphone-alt" /></button>
                                        <button className="btn d-md-block d-none video-call" title="Video call"><i className="ti-video-camera" /></button>
                                        <button className="btn d-md-block d-none" title="More Info"><i className="ti-info" /></button>
                                        <div className="dropdown">
                                            <button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-view-grid" /></button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#test" className="dropdown-item"><i className="ti-headphone-alt" />Voice Call</a>
                                                <a href="#test" className="dropdown-item"><i className="ti-video-camera" />Video Call</a>
                                                <hr />
                                                <a href="#test" className="dropdown-item"><i className="ti-server" />Clear History</a>
                                                <a href="#test" className="dropdown-item"><i className="ti-hand-stop" />Block Contact</a>
                                                <a href="#test" className="dropdown-item"><i className="ti-trash" />Delete Contact</a>
                                            </div>
                                        </div>
                                        <button className="btn back-to-mesg" title="Back">
                                            <i className="ti-arrow-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content empty">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="no-messages">
                                        <i className="ti-comments" />
                                        <p>Seems people are shy to start the chat. Break the ice send the first message.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-md-12">
                                <div className="bottom">
                                    <form className="text-area">
                                        <textarea className="form-control" placeholder="Start typing for reply..." rows={1} defaultValue={""} />
                                        <div className="add-smiles">
                                            <span title="add icon" className="em em-blush" />
                                        </div>
                                        <div className="smiles-bunch">
                                            <i className="em em---1" />
                                            <i className="em em-smiley" />
                                            <i className="em em-anguished" />
                                            <i className="em em-laughing" />
                                            <i className="em em-angry" />
                                            <i className="em em-astonished" />
                                            <i className="em em-blush" />
                                            <i className="em em-disappointed" />
                                            <i className="em em-worried" />
                                            <i className="em em-kissing_heart" />
                                            <i className="em em-rage" />
                                            <i className="em em-stuck_out_tongue" />
                                            <i className="em em-expressionless" />
                                            <i className="em em-bikini" />
                                            <i className="em em-christmas_tree" />
                                            <i className="em em-facepunch" />
                                            <i className="em em-pushpin" />
                                            <i className="em em-tada" />
                                            <i className="em em-us" />
                                            <i className="em em-rose" />
                                        </div>
                                        <button type="submit" className="btn send"><i className="ti-location-arrow" /></button>
                                    </form>
                                    <label>
                                        <input type="file" />
                                        <span className="btn attach"><i className="ti-clip" /></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="call" id="call2">
                        <div className="content">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="inside">
                                        <div className="panel">
                                            <div className="participant">
                                                <img className="avatar-xxl" src="dist/img/avatars/avatar-female-2.jpg" alt="avatar" />
                                                <span>Connecting to sarah</span>
                                                <div className="wave">
                                                    <span className="dot" />
                                                    <span className="dot" />
                                                    <span className="dot" />
                                                </div>
                                            </div>
                                            <div className="options">
                                                <button className="btn option"><i className="ti-microphone" /></button>
                                                <button className="btn option"><i className="ti-video-camera" /></button>
                                                <button className="btn option"><i className="ti-user">+</i></button>
                                                <button className="btn option"><i className="ti-volume" /></button>
                                                <button className="btn option"><i className="ti-comment" /></button>
                                            </div>
                                            <button className="btn option call-end"><i className="ti-close" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

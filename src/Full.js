// eslint-disable-next-line
const Main = () => {
    return (
        <div className="layout">
            <div className="navigation">
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
                            <a href id="dark" className="dark-theme" title="Use Night Mode">
                                <i className="ti-wand" />
                                Night Mode
                            </a>
                            <a href="sign-in.html" className="btn power" title="Sign Out"><i className="ti-power-off" /></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="sidebar" id="sidebar">
                <div className="container">
                    <div className="col-md-12">
                        <div className="tab-content">
                            {/* Start of Contacts */}
                            <div className="tab-pane fade" id="members">
                                <figure className="setting"><img className="avatar-xl" src="dist/img/avatars/avatar-male-1.jpg" alt="avatar" /></figure>
                                <span className="logo"><img alt="" src="dist/img/logo.png" /></span>
                                <div className="search">
                                    <form className="form-inline position-relative">
                                        <input type="search" className="form-control" id="people" placeholder="Search for people..." />
                                        <button type="button" className="btn btn-link loop"><i className="ti-search" /></button>
                                    </form>
                                    <button className="btn create" data-toggle="modal" data-target="#exampleModalCenter">
                                        <i className="ti-user">+</i></button>
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
                                            <a className="dropdown-item" href="#">New user</a>
                                            <a className="dropdown-item" href="#">New Group +</a>
                                            <a className="dropdown-item" href="#">Private Chat +</a>
                                        </div>
                                    </div>
                                    <div className="list-group" id="contacts" role="tablist">
                                        <a href="#" className="filterMembers all online contact" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Sarah" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <h5>Sarah Dalton</h5>
                                                <p>Sofia, Bulgaria</p>
                                            </div>
                                            <div className="person-add">
                                                <i className="ti-user" />
                                            </div>
                                        </a>
                                        <a href="#" className="filterMembers all online contact" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-1.jpg" data-toggle="tooltip" data-placement="top" title="Bob Frank" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <h5>Bob Frank</h5>
                                                <p>Washington, USA</p>
                                            </div>
                                            <div className="person-add">
                                                <i className="ti-user" />
                                            </div>
                                        </a>
                                        <a href="#" className="filterMembers all online contact" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-2.jpg" data-toggle="tooltip" data-placement="top" title="Lucy" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <h5>Lucy Grey</h5>
                                                <p>Shanghai, China</p>
                                            </div>
                                            <div className="person-add">
                                                <i className="ti-user" />
                                            </div>
                                        </a>
                                        <a href="#" className="filterMembers all online contact" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-2.jpg" data-toggle="tooltip" data-placement="top" title="james idoms" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <h5>james idoms</h5>
                                                <p>Helena, Montana</p>
                                            </div>
                                            <div className="person-add">
                                                <i className="ti-user" />
                                            </div>
                                        </a>
                                        <a href="#" className="filterMembers all online contact" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-3.jpg" data-toggle="tooltip" data-placement="top" title="Linda Gates" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <h5>Linda gates</h5>
                                                <p>Indore, India</p>
                                            </div>
                                            <div className="person-add">
                                                <i className="ti-user" />
                                            </div>
                                        </a>
                                        <a href="#" className="filterMembers all offline contact" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Karen joye" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <h5>Karen joye</h5>
                                                <p>Chisinau, Moldova</p>
                                            </div>
                                            <div className="person-add">
                                                <i className="ti-user" />
                                            </div>
                                        </a>
                                        <a href="#" className="filterMembers all offline contact" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="Lisa Honey" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <h5>Lisa Honey</h5>
                                                <p>Vienna, Austria</p>
                                            </div>
                                            <div className="person-add">
                                                <i className="ti-user" />
                                            </div>
                                        </a>
                                        <a href="#" className="filterMembers all offline contact" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-3.jpg" data-toggle="tooltip" data-placement="top" title="Daniel Cabral" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <h5>Daniel Cabral</h5>
                                                <p>Oslo, Norway</p>
                                            </div>
                                            <div className="person-add">
                                                <i className="ti-user" />
                                            </div>
                                        </a>
                                        <a href="#" className="filterMembers all offline contact" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-4.jpg" data-toggle="tooltip" data-placement="top" title="Jhon Doe" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <h5>Jhon Doe</h5>
                                                <p>London, United Kingdom</p>
                                            </div>
                                            <div className="person-add">
                                                <i className="ti-user" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End of Contacts */}
                            {/* Start of Discussions */}
                            <div id="discussions" className="tab-pane fade in active show">
                                <figure className="setting"><img className="avatar-xl" src="dist/img/avatars/avatar-male-1.jpg" alt="avatar" /></figure>
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
                                    <div className="btn-group add-group" role="group">
                                        <button id="btnGroupDrop2" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Add +
                </button>
                                        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                            <a className="dropdown-item" href="#">New user</a>
                                            <a className="dropdown-item" href="#">New Group +</a>
                                            <a className="dropdown-item" href="#">Private Chat +</a>
                                        </div>
                                    </div>
                                    <div className="list-group" id="chats" role="tablist">
                                        <a href="#list-chat" className="filterDiscussions all unread single active" id="list-chat-list" data-toggle="list" role="tab">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Sarah" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <h5>Sarah Dalton</h5>
                                                <div className="new bg-yellow">
                                                    <span>5+</span>
                                                </div>
                                                <span>Mon</span>
                                                <p>A new feature has been updated...</p>
                                            </div>
                                        </a>
                                        <a href="#list-empty" className="filterDiscussions all unread single" id="list-empty-list" data-toggle="list" role="tab">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-1.jpg" data-toggle="tooltip" data-placement="top" title="Michael" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <h5>Bob Frank</h5>
                                                <div className="new bg-red">
                                                    <span>9+</span>
                                                </div>
                                                <span>Sun</span>
                                                <p>How can i improve my chances?</p>
                                            </div>
                                        </a>
                                        <a href="#list-chat" className="filterDiscussions all read single" id="list-chat-list2" data-toggle="list" role="tab">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-2.jpg" data-toggle="tooltip" data-placement="top" title="Lucy" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <h5>Lucy Grey</h5>
                                                <span>Tus</span>
                                                <p>Typing...</p>
                                            </div>
                                        </a>
                                        <a href="#list-empty" className="filterDiscussions all read single" id="list-empty-list2" data-toggle="list" role="tab">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-2.jpg" data-toggle="tooltip" data-placement="top" title="james idoms" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <h5>james idoms</h5>
                                                <span>5 mins</span>
                                                <p>By injected humour, or randomi...</p>
                                            </div>
                                        </a>
                                        <a href="#list-chat" className="filterDiscussions all read single" id="list-chat-list3" data-toggle="list" role="tab">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-3.jpg" data-toggle="tooltip" data-placement="top" title="Linda Gates" alt="avatar" />
                                            <div className="status away" />
                                            <div className="data">
                                                <h5>Linda gates</h5>
                                                <span>Mon</span>
                                                <p>No more running out of the office...</p>
                                            </div>
                                        </a>
                                        <a href="#list-empty" className="filterDiscussions all read single" id="list-empty-list3" data-toggle="list" role="tab">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Karen joye" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <h5>Karen joye</h5>
                                                <span>Fri</span>
                                                <p>All your favourite books at...</p>
                                            </div>
                                        </a>
                                        <a href="#list-chat" className="filterDiscussions all unread single" id="list-chat-list4" data-toggle="list" role="tab">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="Lisa Honey" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <h5>Lisa Honey</h5>
                                                <div className="new bg-indigo">
                                                    <span>1+</span>
                                                </div>
                                                <span>Feb 10</span>
                                                <p>Be the first to know about...</p>
                                            </div>
                                        </a>
                                        <a href="#list-empty" className="filterDiscussions all read single" id="list-empty-list4" data-toggle="list" role="tab">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-3.jpg" data-toggle="tooltip" data-placement="top" title="Daniel Cabral" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <h5>Daniel Cabral</h5>
                                                <span>Feb 9</span>
                                                <p>Dear Daniel Cabral, your massage is today...</p>
                                            </div>
                                        </a>
                                        <a href="#list-chat" className="filterDiscussions all unread single" id="list-chat-list5" data-toggle="list" role="tab">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-4.jpg" data-toggle="tooltip" data-placement="top" title="Jhon Doe" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <h5>Jhon Doe</h5>
                                                <div className="new bg-green">
                                                    <span>4+</span>
                                                </div>
                                                <span>Thu</span>
                                                <p>Unfortunately session cancelled..</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End of Discussions */}
                            {/* Start of Notifications */}
                            <div id="notifications" className="tab-pane fade">
                                <figure className="setting"><img className="avatar-xl" src="dist/img/avatars/avatar-male-1.jpg" alt="avatar" /></figure>
                                <span className="logo"><img alt="" src="dist/img/logo.png" /></span>
                                <div className="search">
                                    <form className="form-inline position-relative">
                                        <input type="search" className="form-control" id="notice" placeholder="Filter notifications..." />
                                        <button type="button" className="btn btn-link loop">
                                            <i className="ti-filter" /></button>
                                    </form>
                                </div>
                                <div className="list-group sort">
                                    <button className="btn filterNotificationsBtn active show" data-toggle="list" data-filter="all">All</button>
                                    <button className="btn filterNotificationsBtn" data-toggle="list" data-filter="latest">Latest</button>
                                    <button className="btn filterNotificationsBtn" data-toggle="list" data-filter="oldest">Oldest</button>
                                </div>
                                <div className="notifications">
                                    <h1>Notifications</h1>
                                    <div className="list-group" id="alerts" role="tablist">
                                        <a href="#" className="filterNotifications all latest notification" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-1.jpg" data-toggle="tooltip" data-placement="top" title="Sarah" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <p>Sarah has accepted your friend request on Talkshak.</p>
                                                <span>Oct 17, 2018</span>
                                            </div>
                                        </a>
                                        <a href="#" className="filterNotifications all latest notification" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-1.jpg" data-toggle="tooltip" data-placement="top" title="Michael" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <p>Michael, you have a new friend suggestion today.</p>
                                                <span>Jun 21, 2018</span>
                                            </div>
                                        </a>
                                        <a href="#" className="filterNotifications all latest notification" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-2.jpg" data-toggle="tooltip" data-placement="top" title="james idoms" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <p>james idoms have just sent you a new message.</p>
                                                <span>Feb 15, 2018</span>
                                            </div>
                                        </a>
                                        <a href="#" className="filterNotifications all latest notification" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-6.jpg" data-toggle="tooltip" data-placement="top" title="Lisa Honey" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <p>Lisa Honey has a birthday today. Wish her all the best.</p>
                                                <span>Mar 23, 2018</span>
                                            </div>
                                        </a>
                                        <a href="#" className="filterNotifications all latest notification" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-3.jpg" data-toggle="tooltip" data-placement="top" title="Sarah" alt="avatar" />
                                            <div className="status online" />
                                            <div className="data">
                                                <p>Linda Gates has accepted your friend request on Talkshak.</p>
                                                <span>Jan 5, 2018</span>
                                            </div>
                                        </a>
                                        <a href="#" className="filterNotifications all oldest notification" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Sarah" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <p>Karen joye have just sent you a new message.</p>
                                                <span>Dec 22, 2017</span>
                                            </div>
                                        </a>
                                        <a href="#" className="filterNotifications all oldest notification" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-2.jpg" data-toggle="tooltip" data-placement="top" title="Sarah" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <p>Michael, you have a new friend suggestion today.</p>
                                                <span>Nov 29, 2017</span>
                                            </div>
                                        </a>
                                        <a href="#" className="filterNotifications all oldest notification" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-3.jpg" data-toggle="tooltip" data-placement="top" title="Sarah" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <p>Daniel Cabral have just sent you a new message.</p>
                                                <span>Sep 31, 2017</span>
                                            </div>
                                        </a>
                                        <a href="#" className="filterNotifications all oldest notification" data-toggle="list">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-male-4.jpg" data-toggle="tooltip" data-placement="top" title="Sarah" alt="avatar" />
                                            <div className="status offline" />
                                            <div className="data">
                                                <p>Jhon Doe has a birthday today. Wish him all the best.</p>
                                                <span>Jul 19, 2017</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End of Notifications */}
                            {/* Start of Settings */}
                            <div className="tab-pane fade" id="settings">
                                <div className="settings">
                                    <div className="profile">
                                        <img className="avatar-xl" src="dist/img/avatars/avatar-male-1.jpg" alt="avatar" />
                                        <h1><a href="#">Bob Frank</a></h1>
                                        <span>New York, USA</span>
                                    </div>
                                    <div className="categories" id="accordionSettings">
                                        <h1>Settings</h1>
                                        {/* Start of My Account */}
                                        <div className="category">
                                            <a href="#" className="title collapsed" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <i className="ti-user" />
                                                <div className="data">
                                                    <h5>My Account</h5>
                                                    <p>Update your profile details</p>
                                                </div>
                                                <i className="ti-angle-down" />
                                            </a>
                                            <div className="collapse" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionSettings">
                                                <div className="content">
                                                    <div className="upload">
                                                        <div className="data">
                                                            <img className="avatar-xl" src="dist/img/avatars/avatar-male-1.jpg" alt="image" />
                                                            <label>
                                                                <input type="file" />
                                                                <span className="btn button">Upload avatar</span>
                                                            </label>
                                                        </div>
                                                        <p>For best results, use an image at least 200px by 200px in .jpg or .png format!</p>
                                                    </div>
                                                    <form>
                                                        <div className="parent">
                                                            <div className="field">
                                                                <label htmlFor="firstName">First name <span>*</span></label>
                                                                <input type="text" className="form-control" id="firstName" placeholder="First name" defaultValue="Bob" required />
                                                            </div>
                                                            <div className="field">
                                                                <label htmlFor="lastName">Last name <span>*</span></label>
                                                                <input type="text" className="form-control" id="lastName" placeholder="Last name" defaultValue="Frank" required />
                                                            </div>
                                                        </div>
                                                        <div className="field">
                                                            <label htmlFor="email">Email <span>*</span></label>
                                                            <input type="email" className="form-control" id="email" placeholder="Enter your email address" defaultValue="bobfrank@gmail.com" required />
                                                        </div>
                                                        <div className="field">
                                                            <label htmlFor="password">Password</label>
                                                            <input type="password" className="form-control" id="password" placeholder="Enter a new password" defaultValue="password" required />
                                                        </div>
                                                        <div className="field">
                                                            <label htmlFor="location">Location</label>
                                                            <input type="text" className="form-control" id="location" placeholder="Enter your location" defaultValue="New York, USA" required />
                                                        </div>
                                                        <button className="btn btn-link w-100">Delete Account</button>
                                                        <button type="submit" className="btn button w-100">Apply</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End of My Account */}
                                        {/* Start of Chat History */}
                                        <div className="category">
                                            <a href="#" className="title collapsed" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                <i className="ti-comments" />
                                                <div className="data">
                                                    <h5>Chats</h5>
                                                    <p>Check your chat history</p>
                                                </div>
                                                <i className="ti-angle-down" />
                                            </a>
                                            <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionSettings">
                                                <div className="content layer">
                                                    <div className="history">
                                                        <p>When you clear your conversation history, the messages will be deleted from your own device.</p>
                                                        <p>The messages won't be deleted or cleared on the devices of the people you chatted with.</p>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="same-address" />
                                                            <label className="custom-control-label" htmlFor="same-address">Hide will remove your chat history from the recent list.</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="save-info" />
                                                            <label className="custom-control-label" htmlFor="save-info">Delete will remove your chat history from the device.</label>
                                                        </div>
                                                        <button type="submit" className="btn button w-100">Clear Chat History</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End of Chat History */}
                                        {/* Start of Notifications Settings */}
                                        <div className="category">
                                            <a href="#" className="title collapsed" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                <i className="ti-bell" />
                                                <div className="data">
                                                    <h5>Notifications</h5>
                                                    <p>Turn notifications on or off</p>
                                                </div>
                                                <i className="ti-angle-down" />
                                            </a>
                                            <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionSettings">
                                                <div className="content no-layer">
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Desktop Notifications</h5>
                                                            <p>You can set up Talkshak to receive notifications when you have new messages.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Unread Message Badge</h5>
                                                            <p>If enabled shows a red badge on the Talkshak app icon when you have unread messages.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Taskbar Flashing</h5>
                                                            <p>Flashes the Talkshak app on mobile in your taskbar when you have new notifications.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Notification Sound</h5>
                                                            <p>Set the app to alert you via notification sound when you have unread messages.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Vibrate</h5>
                                                            <p>Vibrate when receiving new messages (Ensure system vibration is also enabled).</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Turn On Lights</h5>
                                                            <p>When someone send you a text message you will receive alert via notification light.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End of Notifications Settings */}
                                        {/* Start of Connections */}
                                        <div className="category">
                                            <a href="#" className="title collapsed" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                <i className="ti-reload" />
                                                <div className="data">
                                                    <h5>Connections</h5>
                                                    <p>Sync your social accounts</p>
                                                </div>
                                                <i className="ti-angle-down" />
                                            </a>
                                            <div className="collapse" id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionSettings">
                                                <div className="content">
                                                    <div className="app">
                                                        <img src="dist/img/integrations/slack.svg" alt="app" />
                                                        <div className="permissions">
                                                            <h5>Skrill</h5>
                                                            <p>Read, Write, Comment</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="app">
                                                        <img src="dist/img/integrations/dropbox.svg" alt="app" />
                                                        <div className="permissions">
                                                            <h5>Dropbox</h5>
                                                            <p>Read, Write, Upload</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="app">
                                                        <img src="dist/img/integrations/drive.svg" alt="app" />
                                                        <div className="permissions">
                                                            <h5>Google Drive</h5>
                                                            <p>No permissions set</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="app">
                                                        <img src="dist/img/integrations/trello.svg" alt="app" />
                                                        <div className="permissions">
                                                            <h5>Trello</h5>
                                                            <p>No permissions set</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End of Connections */}
                                        {/* Start of Appearance Settings */}
                                        <div className="category">
                                            <a href="#" className="title collapsed" id="headingFive" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                <i className="ti-pencil" />
                                                <div className="data">
                                                    <h5>Appearance</h5>
                                                    <p>Customize the look of Talkshak</p>
                                                </div>
                                                <i className="ti-angle-down" />
                                            </a>
                                            <div className="collapse" id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionSettings">
                                                <div className="content no-layer">
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Turn Off Lights</h5>
                                                            <p>The dark mode is applied to core areas of the app that are normally displayed as light.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider round mode" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End of Appearance Settings */}
                                        {/* Start of Language */}
                                        <div className="category">
                                            <a href="#" className="title collapsed" id="headingSix" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                <i className="ti-flag" />
                                                <div className="data">
                                                    <h5>Language</h5>
                                                    <p>Select preferred language</p>
                                                </div>
                                                <i className="ti-angle-down" />
                                            </a>
                                            <div className="collapse" id="collapseSix" aria-labelledby="headingSix" data-parent="#accordionSettings">
                                                <div className="content layer">
                                                    <div className="language">
                                                        <label htmlFor="country">Language</label>
                                                        <select className="custom-select" id="country" required>
                                                            <option value>Select an language...</option>
                                                            <option>English, UK</option>
                                                            <option>English, US</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End of Language */}
                                        {/* Start of Privacy & Safety */}
                                        <div className="category">
                                            <a href="#" className="title collapsed" id="headingSeven" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                <i className="ti-lock" />
                                                <div className="data">
                                                    <h5>Privacy &amp; Safety</h5>
                                                    <p>Control your privacy settings</p>
                                                </div>
                                                <i className="ti-angle-down" />
                                            </a>
                                            <div className="collapse" id="collapseSeven" aria-labelledby="headingSeven" data-parent="#accordionSettings">
                                                <div className="content no-layer">
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Keep Me Safe</h5>
                                                            <p>Automatically scan and delete direct messages you receive from everyone that contain explict content.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>My Friends Are Nice</h5>
                                                            <p>If enabled scans direct messages from everyone unless they are listed as your friend.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Everyone can add me</h5>
                                                            <p>If enabled anyone in or out your friends of friends list can send you a friend request.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Friends of Friends</h5>
                                                            <p>Only your friends or your mutual friends will be able to send you a friend reuqest.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Data to Improve</h5>
                                                            <p>This settings allows us to use and process information for analytical purposes.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                    <div className="set">
                                                        <div className="details">
                                                            <h5>Data to Customize</h5>
                                                            <p>This settings allows us to use your information to customize Talkshak for you.</p>
                                                        </div>
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End of Privacy & Safety */}
                                        {/* Start of Logout */}
                                        <div className="category">
                                            <a href="sign-in.html" className="title collapsed">
                                                <i className="ti-power-off" />
                                                <div className="data">
                                                    <h5>Power Off</h5>
                                                    <p>Log out of your account</p>
                                                </div>
                                                <i className="ti-angle-down" />
                                            </a>
                                        </div>
                                        {/* End of Logout */}
                                    </div>
                                </div>
                            </div>
                            {/* End of Settings */}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="requests">
                        <div className="title">
                            <h1>Add your friends</h1>
                            <button type="button" className="btn" data-dismiss="modal" aria-label="Close"><i className="ti-close" /></button>
                        </div>
                        <div className="content">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="user">Username:</label>
                                    <input type="text" className="form-control" id="user" placeholder="Add recipient..." required />
                                    <div className="user" id="contact">
                                        <img className="avatar-sm" src="dist/img/avatars/avatar-female-5.jpg" alt="avatar" />
                                        <h5>Karen joye</h5>
                                        <button type="reset" className="btn"><i className="ti-close" /></button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="welcome">Message:</label>
                                    <textarea className="text-control" id="welcome" placeholder="Send your welcome message..." defaultValue={"Hi Karen joye, I'd like to add you as a contact."} />
                                </div>
                                <button type="submit" className="btn button w-100">Send Friend Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/* Add Friends */}
            
            <div className="modal fade" id="startnewchat" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="requests">
                        <div className="title">
                            <h1>Start new chat</h1>
                            <button type="button" className="btn" data-dismiss="modal" aria-label="Close"><i className="ti-close" /></button>
                        </div>
                        <div className="content">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="participant">Recipient:</label>
                                    <input type="text" className="form-control" id="participant" placeholder="Add recipient..." required />
                                    <div className="user" id="recipient">
                                        <img className="avatar-sm" src="dist/img/avatars/avatar-female-5.jpg" alt="avatar" />
                                        <h5>Karen joye</h5>
                                        <button type="reset" className="btn"><i className="ti-close" /></button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="topic">Topic:</label>
                                    <input type="text" className="form-control" id="topic" placeholder="What's the topic?" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea className="text-control" id="message" placeholder="Send your welcome message..." defaultValue={"Hmm, are you friendly?"} />
                                </div>
                                <button type="submit" className="btn button w-100">Start New Chat</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/* Create Chat */}
            
            <div className="main" id="chat-dialog">
                <div className="tab-content" id="nav-tabContent">
                    {/* Start of Babble */}
                    <div className="babble tab-pane fade active show" id="list-chat" role="tabpanel" aria-labelledby="list-chat-list">
                        {/* Start of Chat */}
                        <div className="chat" id="chat1">
                            <div className="top">
                                <div className="container">
                                    <div className="col-md-12">
                                        <div className="inside">
                                            <div className="status online" />
                                            <div className="data">
                                                <h5><a href="#">Sarah Dalton</a></h5>
                                                <span>Active now</span>
                                            </div>
                                            <button className="btn d-md-block d-none audio-call" title="Audio call">
                                                <i className="ti-headphone-alt" />
                                            </button>
                                            <button className="btn d-md-block d-none video-call" title="Video call">
                                                <i className="ti-video-camera" />
                                            </button>
                                            <button className="btn d-md-block d-none" title="More Info">
                                                <i className="ti-info" />
                                            </button>
                                            <div className="dropdown">
                                                <button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="ti-view-grid" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item audio-call"><i className="ti-headphone-alt" />Voice Call</a>
                                                    <a href="#" className="dropdown-item video-call"><i className="ti-video-camera" />Video Call</a>
                                                    <hr />
                                                    <a href="#" className="dropdown-item"><i className="ti-server" />Clear History</a>
                                                    <a href="#" className="dropdown-item"><i className="ti-hand-stop" />Block Contact</a>
                                                    <a href="#" className="dropdown-item"><i className="ti-trash" />Delete Contact</a>
                                                </div>
                                            </div>
                                            <button className="btn back-to-mesg" title="Back">
                                                <i className="ti-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content" id="content">
                                <div className="container">
                                    <div className="col-md-12">
                                        <div className="date">
                                            <hr />
                                            <span>Yesterday</span>
                                            <hr />
                                        </div>
                                        <div className="message">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Karen joye" alt="avatar" />
                                            <div className="text-main">
                                                <div className="text-group">
                                                    <div className="text">
                                                        <p>Where was i, i worry about my viewrs missing me too much!</p>
                                                    </div>
                                                </div>
                                                <span>09:46 AM</span>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="text-main">
                                                <div className="text-group me">
                                                    <div className="text me">
                                                        <p>But if you are not available to talk, then would't they miss you more?</p>
                                                    </div>
                                                </div>
                                                <span>11:32 AM</span>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Karen joye" alt="avatar" />
                                            <div className="text-main">
                                                <div className="text-group">
                                                    <div className="text">
                                                        <p>Aren't you sweet.</p>
                                                    </div>
                                                </div>
                                                <span>02:56 PM</span>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="text-main">
                                                <div className="text-group me">
                                                    <div className="text me">
                                                        <p>That's not an answer..</p>
                                                    </div>
                                                </div>
                                                <div className="text-group me">
                                                    <div className="text me">
                                                        <p>I am tres sorry, what were you saying?</p>
                                                    </div>
                                                </div>
                                                <span>10:21 PM</span>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Karen joye" alt="avatar" />
                                            <div className="text-main">
                                                <div className="text-group">
                                                    <div className="text">
                                                        <p>Great start guys, why can you only talk at certain time on certain days?</p>
                                                    </div>
                                                </div>
                                                <span>11:07 PM</span>
                                            </div>
                                        </div>
                                        <div className="date">
                                            <hr />
                                            <span>Today</span>
                                            <hr />
                                        </div>
                                        <div className="message me">
                                            <div className="text-main">
                                                <div className="text-group me">
                                                    <div className="text me">
                                                        <p>hmmmm, Well done all. send me document please</p>
                                                    </div>
                                                </div>
                                                <span>10:21 PM</span>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Karen joye" alt="avatar" />
                                            <div className="text-main">
                                                <div className="text-group">
                                                    <div className="text">
                                                        <div className="attachment">
                                                            <button className="btn attach" title="Click to download"><i className="ti-file" /></button>
                                                            <div className="file">
                                                                <h5><a href="#" title="Click to download">Policy Sheet.pdf</a></h5>
                                                                <span>80kb Document</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span>11:07 PM</span>
                                            </div>
                                        </div>
                                        <div className="message me">
                                            <div className="text-main">
                                                <div className="text-group me">
                                                    <div className="text me">
                                                        <p>i have received the .pdf document please send me jpeg file for our requirement..</p>
                                                    </div>
                                                </div>
                                                <span><i className="ti-check" />10:21 PM</span>
                                            </div>
                                        </div>
                                        <div className="message">
                                            <img className="avatar-md" src="dist/img/avatars/avatar-female-5.jpg" data-toggle="tooltip" data-placement="top" title="Karen joye" alt="avatar" />
                                            <div className="text-main">
                                                <div className="text-group">
                                                    <div className="text typing">
                                                        <div className="wave">
                                                            <span className="dot" />
                                                            <span className="dot" />
                                                            <span className="dot" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container text-box">
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
                        {/* End of Chat */}
                        {/* Start of Call */}
                    </div>
                    {/* End of Babble */}
                    {/* Start of Babble */}
                    <div className="babble tab-pane fade" id="list-empty" role="tabpanel" aria-labelledby="list-empty-list">
                        {/* Start of Chat */}
                        <div className="chat" id="chat">
                            <div className="top">
                                <div className="container">
                                    <div className="col-md-12">
                                        <div className="inside">
                                            <div className="status offline" />
                                            <div className="data">
                                                <h5><a href="#">Bob Frank</a></h5>
                                                <span>Inactive</span>
                                            </div>
                                            <button className="btn d-md-block d-none audio-call" title="Audio call"><i className="ti-headphone-alt" /></button>
                                            <button className="btn d-md-block d-none video-call" title="Video call"><i className="ti-video-camera" /></button>
                                            <button className="btn d-md-block d-none" title="More Info"><i className="ti-info" /></button>
                                            <div className="dropdown">
                                                <button className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-view-grid" /></button>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a href="#" className="dropdown-item"><i className="ti-headphone-alt" />Voice Call</a>
                                                    <a href="#" className="dropdown-item"><i className="ti-video-camera" />Video Call</a>
                                                    <hr />
                                                    <a href="#" className="dropdown-item"><i className="ti-server" />Clear History</a>
                                                    <a href="#" className="dropdown-item"><i className="ti-hand-stop" />Block Contact</a>
                                                    <a href="#" className="dropdown-item"><i className="ti-trash" />Delete Contact</a>
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
                        {/* End of Chat */}
                        {/* Start of Call */}
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
                        {/* End of Call */}
                    </div>
                    {/* End of Babble */}
                </div>
            </div>
       
        </div>
    );
}

export default Main
import React, { useEffect } from 'react'
import Navigation from './navigation/Navigation.js'
import Sidebar from './sidebar/Sidebar.js'
import ChatDialog from './chatDialog/ChatDialog.js'
import Modals from './modals/Modals.js'
import fetcher from './utilities/FetchActions.js'
import { save_rooms, update_self } from '../redux/action/Actions'
import { useDispatch } from 'react-redux'
import { intialize_ws } from '../redux/action/AsyncActions'
import { messaging } from './../init-fcm'
import '../static/script'

export default function Main() {
    const distpatch = useDispatch()

    useEffect(() => {
        messaging.requestPermission()
        .then(async function() {
            const token = await messaging.getToken();
            console.log(token);
        })
        .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
        });
        navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
    }, [])

    useEffect(() => {
        
        distpatch(intialize_ws());

        fetcher("/rooms/")
        .then(resp => resp.json())
        .then(data => {
            // console.log(data, ws_path)
            distpatch(save_rooms(data))
        })
        .catch(error => console.log(error))
    }, [distpatch]);

    return (
        <div className="layout">
                <Navigation/>
                <Sidebar/>
                <ChatDialog/>
                <Modals/>
            </div>
    )
}


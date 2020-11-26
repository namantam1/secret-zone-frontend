import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
// import {login_user} from '../redux/action/FetchActions'
import axios from 'axios'
import { login_user, update_self_userid } from '../redux/action/Actions'
const BASE_URL = process.env.REACT_APP_API_BASE_URL

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState("password")
    const [valid, setValid] = useState(true)
    const dispatch = useDispatch()
    // const dispatch = useDispatch()
    const className = valid === true ? "form-control" : "form-control is-invalid"

    const submitHandeler = (event) => {
        event.preventDefault();
        const credentials = {
            username: username,
            password: password
        }
        axios.post(BASE_URL + '/login/', credentials)
            .then(function (response) {
                console.log(response.data);
                if (response.status === 200 && response.data.hasOwnProperty("access")) {
                    sessionStorage.clear()
                    sessionStorage.setItem("access", response.data.access)
                    sessionStorage.setItem("refresh", response.data.refresh)
                    dispatch(login_user(response.data.user));
                    dispatch(update_self_userid(response.data.user.id));

                }
                // setUsername("");
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    setValid(Object.values(error.response.data)[0])
                }
            });
        // dispatch(login_user(credentials))
        console.log(credentials);
        setPassword("");
        // console.log(JSON.stringify({text:text}), room)
    }

    return (
        <div className="layout">
            {/* Start of Sign In */}
            <div className="sign-bg">
                <div className="start">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6">
                                <div className="register-content">
                                    <div className="login-header">
                                        <div className="logo">
                                            <img src="/static/dist/img/logo.png" alt="" />
                                        </div>
                                        <h1><i className="ti-key" />Sign in</h1>
                                    </div>
                                    <form className="login-up" onSubmit={submitHandeler}>
                                        <input type="hidden" name="csrfmiddlewaretoken" defaultValue="UOgvJymK7DqWsGAvPHK7QVtZnfB1tYCdbZwB4kQ4vuYdQQtI5mzav7DCCrZG8TsZ" />
                                        <div className="form-group">
                                            <input
                                                onChange={e => setUsername(e.target.value)}
                                                value={username}
                                                name="username" type="text" id="inputEmail" className={className} placeholder="Email or Username" autoComplete="username" required />
                                            <i className="icon ti-email" />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                onChange={e => setPassword(e.target.value)}
                                                value={password}
                                                name="password" 
                                                type={type} 
                                                id="inputPassword" 
                                                className={className} placeholder="Password" autoComplete="current-password" required />
                                            <i onClick={() => setType(type==="password"?"text":"password")}
                                                className={type==="password"?"icon ti-lock":"icon ti-unlock"} />
                                            <div className="invalid-feedback">{valid}</div>
                                        </div>
                                        <input type="submit" className="btn button" defaultValue="Login" />
                                        <div className="callout">
                                            <span>Sign in with</span>
                                            <ul>
                                                <li><a href="#blank" title="Login with facebook" className="facebook"><i className="ti-facebook" /></a></li>
                                                <li><a href="#blank" title="Login with twitter" className="twitter"><i className="ti-twitter" /></a></li>
                                                <li><a href="#blank" title="Login with google" className="google"><i className="ti-google" /></a></li>
                                            </ul>
                                            <span>Don't have account? <a href="/signup/">Create Account</a></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="page-meta">
                                    <h2>Talkshak is a simplest and friendly interface Messagner or plateform.</h2>
                                    <span>login now and enjoy!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Sign In */}
        </div>
    )
}

import Main from './main/Main.js'
import Login from  './auth/Login'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment, useEffect } from 'react';
import {check_login_user} from './redux/action/AsyncActions'

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function(err) {
      console.log("Service worker registration failed, error:", err);
    });
}

function App() {
  const dispatch = useDispatch()
  const isLogin = useSelector(state => state.auth.isLogin)
  const isLogout = useSelector(state => state.auth.isLogout)
  const loading = useSelector(state => state.auth.loading)
  const dark_mode = useSelector(state => state.ui.dark_mode)

  const dark_mode_stylesheet = dark_mode? (<link href="dist/css/dark.css" id="dark" type="text/css" rel="stylesheet"></link>):""

  useEffect(() => {
    dispatch(check_login_user());
  }, [dispatch])
  
  // const component = isLogin ? <Main/> : <Login/>
  var component = () => {
    if(isLogin) {
      return <Main/>
    }
    else if(isLogout) {
      return <Login/>
    }
    else
    return ""
  }
  // const component = <Main/>

  return (
    <Fragment>
    {dark_mode_stylesheet}
    <div className="c-loader-wrapper" style={loading ? {display: "block"} : {display: "none"}}>
        <div className="c-loader"></div>
        {/* <div>Made In India</div> */}
      </div>
    {component()}
    </Fragment>
  )
}

export default App;

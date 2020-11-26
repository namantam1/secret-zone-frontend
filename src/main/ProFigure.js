import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { switch_sidebar } from '../redux/action/UiActions'

const Fig = () => {
    const dispatch = useDispatch()
    const pict = useSelector(state => state.auth.user.image || "")

    return (
        <figure className="setting" onClick={() => dispatch(switch_sidebar())}>
            <img className="avatar-xl" src={pict} alt="avatar"/>
        </figure>
    );
}

export default Fig
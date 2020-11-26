import axios from 'axios'
import {UPDATE_AUTHENTICATED} from './ActionTypes'
import {update_autheticated} from './Actions'

const BASE_URL = process.env.REACT_APP_API_BASE_URL
const TOKEN = process.env.REACT_APP_TOKEN

export const login_user = (credentials) => {
    return dispatch => {
        axios.post(BASE_URL+'/login/', {
            username: credentials.username,
            password: credentials.password
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        });
    }
}
import isLogged from './Loged'
import rooms from './Main'
import ui from './Ui'

import { combineReducers } from 'redux'


const allReducers = combineReducers({
    auth: isLogged,
    rooms: rooms,
    ui: ui
})

export default allReducers
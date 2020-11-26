import * as actionTypes from '../action/ActionTypes'

const initialState = {
    sidebar_open: false,
    dark_mode: false
}

const Ui = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SWITCH_SIDEBAR:
            return {...state, sidebar_open: !state.sidebar_open}

        case actionTypes.SWITCH_DARK_MODE:
            return {...state, dark_mode: !state.dark_mode}
    
        default:
            return state
    }
}

export default Ui;
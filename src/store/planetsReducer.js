import { LOAD_PLANET } from './actionTypes.js'

const planetReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_PLANET:
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}

export default planetReducer

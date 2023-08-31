import { LOAD_MINER } from './actionTypes.js'

const minerReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_MINER:
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}

export default minerReducer

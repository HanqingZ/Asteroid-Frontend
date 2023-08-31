import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducer'

const initialState = {
    miners: [],
    asteroids: [],
    planets: []
}

const customMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, initialState, customMiddleware(applyMiddleware(thunk)))

export default store

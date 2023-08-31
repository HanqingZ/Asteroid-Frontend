import { combineReducers } from 'redux';
import minerReducer from './minersReducer'
import planetReducer from './planetsReducer'
  
export default combineReducers({minerReducer, planetReducer});

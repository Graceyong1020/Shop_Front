import {combineReducers, legacy_createStore as createStore} from 'redux'
import userReducer from './reduces/user'

const allReducers=combineReducers({
    user:userReducer
})

const store=createStore(allReducers);
export default store;
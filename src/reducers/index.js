import {combineReducers} from 'redux'
import detailReducer from './detailReducer'

const rootReducer = combineReducers({
    detail: detailReducer
})
export default rootReducer;
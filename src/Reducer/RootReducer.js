import {combineReducers} from 'redux'
import addCart from '../Features/AddtoCartSlice.js'

export default combineReducers({
	addtoCart: addCart,
})
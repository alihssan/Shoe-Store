import {combineReducers} from 'redux'
import addCart from '../Features/AddtoCartSlice.js'
import getalldata from '../Features/GetAllData.js'

export default combineReducers({
	addtoCart: addCart,
	getAllData:getalldata,
})
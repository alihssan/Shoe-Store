import {combineReducers} from 'redux'
import addtoCart from '../Features/AddtoCartSlice.js'
import getalldata from '../Features/GetAllData.js'

export default combineReducers({
	addtoCart: addtoCart,
	getAllData:getalldata,
})
import {createSlice} from '@reduxjs/toolkit'

const GetAllData=createSlice({
	name:"get all data",
	initialState:{
		getalldata:{}
	},
	reducers:{
		getalldata:{
			reducer(state,action){
				const data=action.payload
				state.getalldata={...data}
			},
			prepare(data){
				return{
				payload:{
					data
				}
			}
			}
		}
	}
})
export const {getalldata}=GetAllData.actions




export default GetAllData.reducer
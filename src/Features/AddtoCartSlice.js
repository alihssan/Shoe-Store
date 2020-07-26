import {createSlice} from '@reduxjs/toolkit'


const AddtoCart=createSlice({
	name:"Add to Cart",
	initialState:[],
	reducers:{
		addCart:{
			reducer(state,action){
				const {title,slug,Description}=action.payload
				state.push({title,slug,Description})
			},
			prepare({title,slug,Description}){
				return {
					payload:{
							 title,
							 slug,
							 Description }
				}
			}
		}
	}
})
 
export const {addCart}=AddtoCart.actions

export default AddtoCart.reducer
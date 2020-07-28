import {createSlice} from '@reduxjs/toolkit'


const AddtoCart=createSlice({
	name:"Add to Cart",
	initialState:[],
	reducers:{
		addCart:{
			reducer(state,action){
				const {title,Description}=action.payload
				state.push({title,Description})
			},
			prepare({title,Description}){
				return {
					payload:{
							 title,
							 Description }
				}
			}
		}
	}
})

export const {addCart}=AddtoCart.actions
export default AddtoCart.reducer
import {createSlice} from '@reduxjs/toolkit'


const AddtoCart=createSlice({
	name:"Add to Cart",
	initialState:{
		item:[],
		totalprice:0
	},
	reducers:{
		addCart:{
			reducer(state,action){
				const {title,Description,image,slug,price}=action.payload
				state.item.push({title,Description,image,slug,price})
				state.totalprice+=price
			},
			prepare({title,Description,image,slug,price}){
				return {
					payload:{
							 title,
							 Description,
							 image,
							 slug,
							 price }
				}
			}
		}
	}
})

export const {addCart}=AddtoCart.actions
export default AddtoCart.reducer
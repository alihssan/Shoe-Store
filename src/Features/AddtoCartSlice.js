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
		,
		clearCart:state=> {
			state.item.length=0
			state.totalprice=0
		},

		removeItem:{
			reducer(state,action){
				const {slug}=action.payload
				const item_remove=state.item.findIndex(data=>data.slug===slug)
				state.totalprice-=state.item[item_remove].price
				state.item=[
					...state.item.slice(0,item_remove),
					...state.item.slice(item_remove+1)
				]
			},
			prepare({slug}){
				return{
					payload:{
						slug
					}
				}
			}
		}
	}
})
export const {addCart,clearCart,removeItem}=AddtoCart.actions
export default AddtoCart.reducer
import React from 'react'
import {connect} from 'react-redux'
import styles from './Billing.module.css'
import Fade from 'react-reveal/Fade'
import {clearCart,removeItem} from '../../Features/AddtoCartSlice.js'
import {useDispatch} from 'react-redux'
import {GiCancel} from 'react-icons/gi'
function Billing(props){
	const {products}=props
	const dispatch=useDispatch()
	console.log(products)
	return(
		<div className={styles.page}>
			<div className={styles.cart}>
			{products.length===0 ? <h1>Cart is Empty</h1>
			:
			products.map(data=>
				<Fade bottom>
					<div className={styles.container}>
						<div className={styles.product} key={data.slug}>
							<img className={styles.img} src={data.image}/>
								<div className={styles.desc}>
									<p className={styles.title}>{data.title}</p>
									<p className={styles.price}>{`${data.price}$`}</p>

								</div>
						</div>
						<button style={{backgroundColor:"black",border:"0.1px solid black", width:"40px",float:"right",marginTop:"-100px",marginLeft:"10px"}} onClick={()=>dispatch(removeItem(data))}>
							<GiCancel size={25} color="white" style={{marginLeft:"-7px"}}/>
						</button>
					</div>
				</Fade>
				)}
			
			</div>
			{products.length!==0 &&
			<Fade bottom>
				<button className={styles.clear} onClick={()=>dispatch(clearCart())}>
					Clear Cart
				</button>
			</Fade>
		}
		</div>

		)
}
function mapStateToProps({addtoCart}){
	return{
		products:addtoCart.item,

	}
}
export default connect(mapStateToProps)(Billing)
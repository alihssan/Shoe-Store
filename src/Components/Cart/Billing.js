import React from 'react'
import {connect} from 'react-redux'
import styles from './Billing.module.css'
import Fade from 'react-reveal/Fade'

function Billing(props){
	const {products}=props
	console.log(products)
	return(
		<div className={styles.page}>
			<div className={styles.cart}>
			{products.length===0 ? <h1>Cart is Empty</h1>
			:
			products.map(data=>
				<Fade bottom>
				<div className={styles.product} key={data.slug}>
					<img className={styles.img} src={data.image}/>
						<div className={styles.desc}>
							<p className={styles.title}>{data.title}</p>
							<p className={styles.price}>{`${data.price}$`}</p>

						</div>
				</div>
				</Fade>
				)}
			</div>
		</div>

		)
}
function mapStateToProps({addtoCart}){
	return{
		products:addtoCart.item,

	}
}
export default connect(mapStateToProps)(Billing)
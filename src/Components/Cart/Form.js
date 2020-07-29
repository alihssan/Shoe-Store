import React from 'react'
import styles from './Form.module.css'
import {connect} from 'react-redux'
import Fade from 'react-reveal/Fade'
function Form(props){
	const {totalamount}=props
	return(
		<div className={styles.cont}>
			<Fade bottom>
				<div className={styles.formfields}>
					<p>Name:</p>
					<input className={styles.field} type="text" placeholder="Type your Name"/>
					<p>Email:</p>
					<input className={styles.field} type="text" placeholder="Type your Email"/>
					<p>Phone Number #:</p>
					<input className={styles.field} type="text" placeholder="Type your Phone Number"/>
				</div>
			</Fade>
			<Fade bottom>
				<div className={styles.total}>
					<h1>Total:</h1>
					<p>{`${totalamount}$`}</p>
				</div>
			</Fade>
			<Fade bottom>
				<button className={styles.btn}>
					Checkout
				</button>
			</Fade>

		</div>
		)
}
function mapStateToProps({addtoCart}){
	return{
		totalamount:addtoCart.totalprice
	}
}
export default connect(mapStateToProps)(Form)
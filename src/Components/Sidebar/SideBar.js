import React from 'react'
import Styles from './Sidebar.module.css'
import logo from  './pngwing.com.png'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaMale} from 'react-icons/fa'
import {FaFemale} from 'react-icons/fa'
import {FaChild} from 'react-icons/fa'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'



function SideBar(props){
	const {location,value}=props
	console.log(value)
	return(
		<div className={Styles.sidebar}>
			<Link to="/">
				<div className={Styles.logo}>
					<img className={Styles.image} src={logo}/>
				</div>
			</Link>
			<Link to="/Cart">
				<div className={Styles.nav} 
					style={{backgroundColor: location.pathname==="/Cart" ? 'black' : "transparent"}}

				>
					<div className={Styles.count} >
						<p>{value.length}</p>
					</div>
					<AiOutlineShoppingCart className={Styles.icon} size={45} color="white"/>
				

				</div>
			</Link>
			<Link to="/Mens">
				<div className={Styles.nav} 
					style={{backgroundColor: location.pathname==="/Mens" ? 'black' : "transparent"}}

				>
					<FaMale className={Styles.icon} size={45} color="white"/>
				</div>
			</Link>
			<Link to="/Womens">
				<div className={Styles.nav} 
					style={{backgroundColor: location.pathname==="/Womens" ? 'black' : "transparent"}}

				>
					<FaFemale className={Styles.icon} size={45} color="white"/>

				</div>
			</Link>
			<Link to="/Child">
				<div className={Styles.nav} 
					style={{backgroundColor: location.pathname==="/Child" ? 'black' : "transparent"}}>
					<FaChild className={Styles.icon} size={45} color="white"/>

				</div>
			</Link>
		</div>

		)

}
function mapStateToProps({addtoCart}){

	return{
		value:addtoCart.item

	}
}
export default withRouter(connect(mapStateToProps)(SideBar))
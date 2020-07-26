import React from 'react'
import styles from './Stock.module.css'
import { Card} from 'semantic-ui-react'
import im from '../Components/Sidebar/website-rebuilt-in-gatsbyjs.png'



export default function Stock(props){
	const {title,Description,slug,products,container}=props.Data
	return(
		<div className={styles.container}>
			<h1>{title}</h1>
			<div>
			{container.map((dat)=>
			<Card
				style={{height:"100%",width:"25%",marginLeft:"30px",marginTop:"30px",display:"inline-block",borderRadius:"0px",boxShadow:"5px 5px 5px grey"}}
    			header={dat.title}
    			image={dat.image}
    			description={dat.Description}
  				/>
  			)}
  			</div>
			

		</div>


		)
}
import React from 'react'
import styles from './Footer.module.css'
import {BsHeartFill} from 'react-icons/bs'

export default function Footer(){
	return(
		<div className={styles.footer}>
			<p>Made By Ali Hassan With <BsHeartFill color="red" style={{marginTop:"8px"}}/></p>
		</div>


		)
}
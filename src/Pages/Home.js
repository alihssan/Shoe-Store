import React from 'react'
import Styles from './Home.module.css'
import ball from './ball.png'
import Fade from 'react-reveal'
import { Card} from 'semantic-ui-react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import loafer from '../Components/Sidebar/loafer.jpg'
import cr7 from '../Components/Sidebar/cr7.jpg'
import spor from '../Components/Sidebar/spor.jpeg'
import cric from '../Components/Sidebar/cric.jpeg'




export default function Home(){
	const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

	return(
		<div>
			<div className={Styles.home}>
				<h1>No.1 Market Place For Best Quality Shoe Wear.</h1>
				<Fade bottom><img className={Styles.img} src={ball} /></Fade>
				<div className={Styles.disc}>
					<Fade bottom><p>
						lorem ipsum lorem ipsum lorem ipsum	lorem ipsum lorem ipsum 
						lorem ipsumlorem ipsum lorem ipsum lorem ipsum	lorem ipsum 
						lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum	
						lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
						lorem ipsum	lorem ipsum lorem ipsum lorem ipsumlorem ipsum 
						lorem ipsum lorem ipsum	lorem ipsum lorem ipsum lorem ipsum
						lorem ipsum lorem ipsum lorem ipsum	lorem ipsum lorem ipsum lorem ipsum
						lorem ipsum lorem ipsum lorem ipsum	lorem ipsum lorem ipsum lorem ipsum

					</p></Fade>


				</div>
			</div>
			<div className={Styles.info}>
				<Fade bottom><h1>Our Products</h1></Fade>
				<Carousel responsive={responsive}>
				<div><Card
					style={{height:"100%",width:"80%",marginLeft:"30px",marginTop:"30px"}}
    				image={loafer}
  				/></div>
  				<div><Card
					style={{height:"100%",width:"80%",marginLeft:"30px",marginTop:"30px"}}
    				image={cr7}

  				/></div>
  				<div><Card
					style={{height:"100%",width:"80%",marginLeft:"30px",marginTop:"30px"}}
    				image={spor}
  				/></div>
  				<div><Card
					style={{height:"100%",width:"80%",marginLeft:"30px",marginTop:"30px"}}
    				image={cric}
  				/></div>
  				
  				</Carousel>

			</div>
			
		</div>
		)

}
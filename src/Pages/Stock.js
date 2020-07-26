import React from 'react'
import styles from './Stock.module.css'
import im from '../Components/Sidebar/website-rebuilt-in-gatsbyjs.png'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function Stock(props){
	const {title,Description,slug,products,container}=props.Data
	const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    minWidth: 350,
    display:"inline-block",
    marginLeft:"50px",
    marginTop:"20px",
  },
  media: {
    height: 270,
  },
});
	  const classes = useStyles();
	return(
		<div className={styles.container}>
			<h1>{title}</h1>
			<div>
			{container.map((dat)=>
			 <Card className={classes.root}>
      			<CardActionArea>
        <CardMedia
          className={classes.media}
          image={dat.image}
          title={dat.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {dat.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {dat.Description}
          </Typography>
          <Typography style={{fontSize:"20px",color:"grey",fontWeight:"500",float:"left",marginTop:"5px",fontWeight:"400"}}>
        	Price
        </Typography>
          <Typography style={{fontSize:"20px",color:"grey",fontWeight:"500",float:"right",fontWeight:"400"}}>
        	3000Rs
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="grey" style={{fontSize:"12px",color:"grey",fontWeight:"600",float:"right",border:"0.1px solid grey",marginBottom:"20px",marginLeft:"5px"}}>
          Add to Cart
        </Button>
        
        
      </CardActions>
    </Card>
  			)}
  			</div>
			

		</div>


		)
}
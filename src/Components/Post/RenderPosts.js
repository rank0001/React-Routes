import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink} from "react-router-dom";
import { Grid } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border:"2px solid red"    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  h3:{
    color:"brown"
  }
 
});

export default function RenderPosts(props) { 
  const { title,body,id} = props.posts; 
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
    <Card className={classes.root} >
      <Grid container alignItems="center"
    justify="center">
    <Grid item lg={6} >
      <CardContent >
        <Typography className={classes.title} color="textSecondary" gutterBottom >
          <h3><span className={classes.h3}>Title : </span>{title}</h3>
        </Typography>
        
        <Typography variant="body2" component="p">
        <h3><span className={classes.h3}>Body: </span>
        {body}</h3>
          
        </Typography>
      </CardContent>
      <CardActions>
      <RouterLink to={`/posts/${id}`}>
      <Button size="large" variant="contained" color="secondary">Learn More</Button>
      </RouterLink>    
      </CardActions>
      </Grid>
    </Grid>
    </Card>
   
  );
}

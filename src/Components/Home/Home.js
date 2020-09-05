import React from 'react'
import { makeStyles, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({

    buttonStyle:{
      
    }
});


const Home = () => {
    const classes = useStyles();
    
    return (  
        <div className="home">
        <Link to="/posts">
         <Button className="button"
         variant="contained" color="secondary" size="large">
            Get Posts
         </Button>
          </Link>

        </div>
    );
}
 
export default Home;
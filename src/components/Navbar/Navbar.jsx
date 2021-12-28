import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link} from 'react-router-dom';


import logo from '../../assets/sukariya-logo.png'
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
 

    
    
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='Date Shop' height='50px' width='50px' className={classes.image}/>
                        <strong>Al-Sukkariya</strong>
                    </Typography>
                    <div className={classes.grow} />
                    
                    <Typography component={Link} to='/AboutUs' variant='h6' className={classes.title} color='inherit'>
                        
                        About Us
                    </Typography>
                    <div className={classes.grow} />
                    
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                    
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Navbar

import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant ='subtitle1'>You have no items in your shopping cart,
            <Link to='/' className={classes.link}> start adding some!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container justifyContent="flex-start" spacing={3}  direction="column">
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id} >
                    <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                </Grid>
            ))}
        </Grid>
                <div className={classes.cardDetails}>
                    <Typography className={classes.subtotalsize} variant='h6'>Subtotal: { cart.subtotal.formatted_with_code}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart} >Empty Cart</Button>
                        <Button component={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                    </div>
                </div>
         </>
    );

    if(!cart.line_items) return 'Loading...';

    return (
        
        <Container marginBottom>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant='h3' gutterBottom><strong>Your Shopping Cart</strong></Typography>
            <br/>
            <br/>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
        
    )
}

export default Cart

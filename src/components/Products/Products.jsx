import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

/* Mock products
const products = [
    {  id: 1, name: 'FirstBox', description: 'First date box.', price: '5 BHD', image: 'https://images.unsplash.com/photo-1607166452427-7e4477079cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'},
    {  id: 2, name: 'SecondBox', description: 'Second date box.', price: '10 BHD', image: 'https://images.unsplash.com/photo-1573376670774-4427757f7963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60' },              

]; */
    
const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            {/*adding height to push content below navbar*/}
            <div className ={classes.toolbar} />
        <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart}/>
            </Grid>
        ))}

        </Grid>
    </main>
    )

    
}

export default Products;
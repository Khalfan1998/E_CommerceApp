import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  /*get items from the list*/
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    /*populating products*/
    setProducts(data);
  };

  const fetchCart = async () => {
    /*get cart*/
    setCart(await commerce.cart.retrieve());
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;

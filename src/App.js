import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";

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
  /*add items to cart */
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      {/*<Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;

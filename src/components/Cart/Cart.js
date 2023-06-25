import React from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartButtonItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      {cartButtonItems.length > 0 ? (
        <>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartButtonItems.map((product) => (
              <CartItem
                title={product.name}
                price={product.price}
                total={product.totalPrice}
                quantity={product.quantity}
                key={product.id}
                id={product.id}
              />
            ))}
          </ul>
        </>
      ) : <h2>No Shopping Item Chosen!</h2>}
    </Card>
  );
};

export default Cart;

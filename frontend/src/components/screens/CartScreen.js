import React from 'react';
import './CartScreen.css';
import CartItem from '../CartItem';

const CartScreen = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping cart</h2>

        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>Subtotal (0) items</p>
          <p>400€</p>
        </div>
      
      <div>
        <button type="button">Proceed to checkout</button>
      </div>
      </div>
    </div>
  );
};

export default CartScreen;
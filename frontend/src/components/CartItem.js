import React from 'react';
import './CartItem.css'
import { Link } from 'react-router-dom';

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src="https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2018/01/play-store.jpg?resize=1212,712" alt=""></img>
      </div>
      <Link to={`/product/${11}`} className="cartitem__name">
        <p>Product 1</p>

      </Link>

      <p className="cartitem__price">48€</p>

      <select className="cartitem__select"> 
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="cartitem__deletebtn">
        <i className="fas fa-trash"></i>
      </button>
      
    </div>
  );
};

export default CartItem ;
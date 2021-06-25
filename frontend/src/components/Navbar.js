import React from 'react';
import './Navbar.css';
import { Link}  from 'react-router-dom'

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Eshop</h2>
      </div>
      
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartcounter">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>

      <div className='ham__menu' onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
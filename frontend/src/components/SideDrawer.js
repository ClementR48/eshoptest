import React from 'react'
import { Link } from 'react-router-dom'
import './SideDrawer.css'

const SideDrawer = ({ show, click }) => {
  const sideClass = ['sidedrawer']
  if (show) {
    sideClass.push('show')
  }

  return (
    <div className={sideClass.join(' ')}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart" >
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="sidedrawer__cartcounter">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideDrawer

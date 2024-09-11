import "./style/navbar.css"
import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
function Navbar() {
  return (
    <div className="link">
      <Link to="/">Shop</Link>
      <Link to="/cart"><ShoppingCart size={25}/></Link>
    </div>
  )
}

export default Navbar

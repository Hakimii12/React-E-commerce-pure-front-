import "./style/navbar.css"
import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import shopicon from "../assets/shop_icon/shop_icon.jpg"
function Navbar() {
  return (
    <div className="link">
      <Link to="/"><img src={shopicon} alt="" /></Link>
      <Link to="/cart"><ShoppingCart size={30} /></Link>
    </div>
  )
}

export default Navbar

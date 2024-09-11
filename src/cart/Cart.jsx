import React from 'react'
import PRODUCTS from '../PRODUCT'
import { MyContext } from '../shoppingCenter/shopping-index'
import { useContext } from 'react'
import CartItems from './CartItems'
import '../shop/Styles/prodcut.css'
import { Navigate, useNavigate } from 'react-router-dom'
function Cart() {
const {cartItames,TotalValue}=useContext(MyContext);
const totalValue=TotalValue()
const navigate=useNavigate();
  return (
    <>
     <section>
      {PRODUCTS.map((Element)=>cartItames[Element.id]>0 &&<CartItems data={Element}/>)}
      </section>
    <div className='TotalValue'>
      {totalValue>0 ?<p>total price: <strong> {totalValue}</strong>$</p>:<h1>no items</h1>}
    </div>
    <div id='navigate'>
      <button id='navigate-btn' onClick={()=>navigate('/')}>Back to shop</button>
    </div>
    </>

  )
}
export default Cart

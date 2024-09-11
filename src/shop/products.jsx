import React, { useContext } from 'react'
import { MyContext } from '../shoppingCenter/shopping-index';
import '../shop/Styles/prodcut.css'
function Products(props) {
const {AddItems,cartItames}=useContext(MyContext);
const {id,productName,price,productImage}=props.value
  return (
    <div id='conainer'>
    <div className='imageBox'>
      <img src={productImage} alt="" className='image' />
    </div>
    <div className='prodNam'>
      {productName}
    </div>
    <div className='prodPrice'>
      {price}$
    </div>
    <div id='navigate'>
      <button id='navigate-btn' onClick={()=>AddItems(id)}>add to cart
        {cartItames[id]>0&&<>({cartItames[id]})</>}
        </button>
    </div>
    </div>
  )
}

export default Products

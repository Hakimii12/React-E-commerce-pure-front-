import React from 'react'
import PRODUCTS from '../PRODUCT'
import { MyContext } from '../shoppingCenter/shopping-index'
import { useContext } from 'react'
function CartItems(props) {
const {AddItems,RemoveItems,cartItames,SetItems}=useContext(MyContext)
const {id,productName,price,productImage}=props.data
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
   <div>
    <button onClick={()=>RemoveItems(id)}>-</button>
    <input type="text" style={{width:25, textAlign:'center'}} 
    value={cartItames[id]} onChange={(event)=>SetItems(event.target.value,id)}/>
    <button onClick={()=>AddItems(id)}>+</button>
   </div>
   </div>
  )
}
export default CartItems

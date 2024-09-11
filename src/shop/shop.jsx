import React, { useState } from 'react'
import Products from './products'
import PRODUCTS from '../PRODUCT'
import '../shop/Styles/prodcut.css'
function Shop(){
  const [selectedPrice,setSelectedPrice]=useState('');
  const [searchProduct,setSearchProduct]=useState('')
   function handleSelectPrice(event){
        setSelectedPrice(event.target.value)
   }
   function handleSearchProdcut(event){
    setSearchProduct(event.target.value);
   }
   const filteredProductes=PRODUCTS.filter((element)=>{
    const filterSearch=element.productName.toLocaleLowerCase().includes(searchProduct.toLocaleLowerCase());
      function SelectPrice(){
        if(!selectedPrice) return true;
        const price=element.price
        switch(selectedPrice){
            case 'All':
                return price
            case 'under-20':
                return price<20
            case '20-50':
                return price>=20 && price <50
            case '50-100':
                return price>=50 && price<100
            case 'above-100':
                return price>100
        }
      }
      return filterSearch && SelectPrice();
   })
   return(
    <>
    <div className='filter'>
    <input type="text" onChange={handleSearchProdcut}
    placeholder='search here......'/>
    <div className='selectFetching' >
         <label htmlFor="">select price</label>
         <select onChange={handleSelectPrice}>
            <option >All</option>
            <option>under-20</option>
            <option >20-50</option>
            <option >50-100</option>
            <option>above-100</option>
        </select>
    </div>
    </div>
    <section>
    {filteredProductes.map((element)=>
    <Products key={element.id} value={element}/>)}
    </section>
    </>
   )
}
export default Shop;
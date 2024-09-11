import { createContext } from "react";
export const MyContext = createContext(null);
import React from 'react';
import { useState } from "react";
import PRODUCTS from '../PRODUCT'
function defaultValue(){
   let cart={}
   for(let i=1; PRODUCTS.length>i;i++ ){
    cart[i]=0
   }
   return cart;
}
function ShopIndex(props) {
  const [cartItames,setCartItames]=useState(defaultValue())
  function TotalValue(){
    let totaltPriceValue=0
      for(let items in cartItames){
          if(cartItames[items]>0){
          const ProductInfo=PRODUCTS.find((Element)=>Element.id==items)
          totaltPriceValue+=(ProductInfo.price)*cartItames[items]
          }
      }
      return totaltPriceValue;
  }
  function AddItems(items){
        setCartItames({...cartItames,[items]:cartItames[items]+1})
  }
  function RemoveItems(items){
    setCartItames({...cartItames,[items]:cartItames[items]-1})
  }
  function SetItems(action,items){
    setCartItames({...cartItames,[items]:action})
  }
  const Allvalue={AddItems,RemoveItems,SetItems,cartItames,TotalValue}
  return (
    <MyContext.Provider value={Allvalue}>
      {props.children}
    </MyContext.Provider>
  );
}

export default ShopIndex;

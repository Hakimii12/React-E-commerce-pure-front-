import {BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Shop from "./shop/shop";
import Cart from "./cart/Cart";
import Navbar from "./Component/navbar";
import ShopIndex from "./shoppingCenter/shopping-index";

function App(){
  return(
 
  <ShopIndex>
    <Router>
      <Navbar/>
        <Routes>
            <Route  path="/" element={<Shop/>} />
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </Router>
  </ShopIndex>
   )
}
export default App
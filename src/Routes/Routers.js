import React from 'react'
import {Routes,Route,} from "react-router-dom";
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ProductDetails from '../pages/ProductDetails';
import Shop from '../pages/Shop';
import Signup from '../pages/Signup';
import Checkout from "../pages/Checkout"

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/shop/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/checkout' element={<Checkout />}/>
    </Routes>
  )
}

export default Routers
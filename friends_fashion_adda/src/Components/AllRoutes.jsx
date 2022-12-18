import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Mobile from '../Pages/Mobile'
import ProductDetails from './ProductDetails'
import {ParentCart} from '../Components/Cart/ParentCart'
import ThanksPage from './Cart/ThanksPage'
import Otp from './Cart/Otp'
import Payment from '../Components/Cart/Payment'
import WishList from './WishList'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/men' element={<Men/>}></Route>
            <Route path='/women' element={<Women/>}></Route>
            <Route path='/wishlist' element={<WishList/>}></Route>
            <Route path='/mobile' element={<Mobile/>}></Route>
            <Route path='/products/:id' element={<ProductDetails/>}></Route>
            <Route path='/cart' element={<ParentCart/>}></Route>
            <Route path='/cart/payment' element={<Payment/>}></Route>
            <Route path='/cart/otp' element={<Otp/>}></Route>
            <Route path='/cart/thanks' element={<ThanksPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes
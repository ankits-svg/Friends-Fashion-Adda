import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Mobile from '../Pages/Mobile'
import ProductDetails from './ProductDetails'
import CartPage from './CartPage'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/men' element={<Men/>}></Route>
            <Route path='/women' element={<Women/>}></Route>
            <Route path='/mobile' element={<Mobile/>}></Route>
            <Route path='/products/:id' element={<ProductDetails/>}></Route>
            <Route path='/cart/:id' element={<CartPage/>}></Route>
            
        </Routes>
    </div>
  )
}

export default AllRoutes
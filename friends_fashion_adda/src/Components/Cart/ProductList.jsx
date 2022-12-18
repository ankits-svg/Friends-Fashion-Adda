import "./ProductList.css";
import React, { useState } from "react";
import { Button } from "@chakra-ui/react"


export const ProductList = ({
      cart_image,
      cart_title,
      cart_price,
      cart_canclprice
}) => {
  const [qty,setQty]=useState(1)
  const handleClick=(x)=>{
    setQty(x+qty)
  }
return (
    <div className="Productdiv">
      <div className="text-img">
        <div className="texts">
          <div className="title">
            {cart_title}
          </div>
          <div className="price">
            <div className="original-price">₹{cart_price*qty}</div>
            <div className="strikedoff-price">₹{cart_canclprice*qty}</div>
          </div>
          <div className="saved">You saved {`₹${Math.abs(cart_price-cart_canclprice)}!`}</div>

          <select name="" id="Size">
          <option value="">Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
              <option value="3XL">3XL</option>
          </select>
          {/* <select name id="Qty">
          <option value={qty}>Qty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
          </select> */}
          <Button colorScheme='blue' bg={'#FEC304'} disabled={qty===1} onClick={()=>handleClick(-1)}>-</Button>
          <Button>{qty}</Button>
          <Button colorScheme='blue' bg={'#FEC304'} onClick={()=>handleClick(+1)}>+</Button>
        </div>
        <img className="cart_image" src={cart_image}
          alt="cart"
        />
      </div>
      
    </div>
  );
};

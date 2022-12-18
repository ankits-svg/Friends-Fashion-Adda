
import { DeleteOutline, ShoppingBagOutlined } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function WishList() {

  const [wish,setWish]=useState([])

  const getData=async()=>{
    const res = await fetch("http://localhost:8080/wishlist");
    const data = await res.json();
    setWish(data);
    console.log(data);
  }

  useEffect(() => {
    getData()
  }, [])

  const handleCart=(el,id)=>{
    const cartData = {
      productimage_url: el.image,
      productprice: el.price,
      productname: el.name,
      productcancelprice:el.canceledprice
    };
    axios.post(`http://localhost:8080/cart/${id}`, cartData);
    alert("Data Added in Cart");
    console.log(cartData);
  }

  const handleRemove=(id)=>{
    fetch(`http://localhost:8080/wishlist/${id}`,{
        method:'DELETE'
    })
    .then((res)=>{
         res.json().then((ress)=>{
          //  console.log(ress)
            getData();
         })
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  return (
    <div>
      {wish.map((el,id)=>(
        <div>
          <img src={el.productimage_url} alt={el.id} />
          <h2>{el.productname}</h2>
          <p>{el.productprice}</p>
          <ShoppingBagOutlined onClick={()=>handleCart(el.id)} cursor='pointer'/>
          <DeleteOutline onClick={()=>handleRemove(el.id)} cursor='pointer'/>
        </div>
      ))}
    </div>
  )
}

export default WishList
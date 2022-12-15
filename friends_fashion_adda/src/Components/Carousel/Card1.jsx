import React from 'react'
import { FavoriteBorder } from '@mui/icons-material'
function Card1({img,title, category, price, cancel}) {
  return (
    <div>
        
        <h3>{title}</h3>
        <img src={img} alt="err" width={'65%'}/>
        <FavoriteBorder/>
        <h4>{category}</h4>
        <div>
          <p>{price}</p>
          <p>{cancel}</p>
          <p>{Math.floor(Math.random()*100)}%OFF</p>
        </div>
    </div>
  )
}

export default Card1

/*
img={el.image} title={el.name} category={el.category} price={el.price} cancel={el.canceledprice}
*/
import React, { useState } from 'react'

import './Payment.css'
function PayInput() {
    const[card,setCard]=useState({
        card_no:"",
        card_name:"",
        card_expiry:"",
        card_CVV:"",
    })

    

    const handleInput=(e)=>{
        setCard({ ...card, [e.target.name]: e.target.value });
    }

    
  return (
    <div className='PI1'>
        <input type="number " value={card.card_no} autocomplete="new-password" name="card_no" onChange={handleInput} placeholder="Card Number" required/>

        <input type="text" value={card.card_name} name="card_name" onChange={handleInput} placeholder="Name on the Card" required/>

        <input type="number " value={card.card_expiry} name="card_expiry" onChange={handleInput} placeholder="Valid Through MM/YY" required/>

        <input type="number " value={card.card_cvv}  name="card_CVV" onChange={handleInput} placeholder="CVV" required/>
        
    </div>
  )
}

export default PayInput
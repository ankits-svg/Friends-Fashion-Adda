import React from 'react'
import './Footer.css'
import  Image  from '../../Images/Logo.png';
function Footer() {
  return (
    <div className='F1'>
      <div>left</div>
      <div>center
        <div>
          <img src={Image} alt="error" width="150px"/>
        </div>
        <div className='F2'>
          <div>
            <h1>Customer Service</h1>
             <h4>Contact Us</h4>
            <h4>Track Order</h4>
            <h4>Return Order</h4>
            <h4>Cancel Order</h4>
          </div>
          <div>
            <h1>Company</h1>
             <h4>About Us</h4>
            <h4>Terms & Conditions</h4>
            <h4>Privacy Policy</h4>
            <h4>Blog</h4>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>right</div>
    </div>
  )
}

export default Footer
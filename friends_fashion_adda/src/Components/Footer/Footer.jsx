import React from 'react'
import './Footer.css'
import  Image  from '../../Images/Logo.png';
import { Facebook } from '@mui/icons-material';
function Footer() {
  return (
    <div className='F1'>
      
      <div>
        <div>
          <img src={Image} alt="error" width="150px"/>
        </div>
        <div className='F2'>
          <div>
            <h1 className='F3'>Customer Service</h1>
            <h4>Contact Us</h4>
            <h4>Track Order</h4>
            <h4>Return Order</h4>
            <h4>Cancel Order</h4>
          </div>
          <div>
            <h1 className='F3'>Company</h1>
             <h4>About Us</h4>
            <h4>Terms & Conditions</h4>
            <h4>Privacy Policy</h4>
            <h4>Blog</h4>
          </div>
          <div>
            <h1 className='F3'>Connect With Us</h1>
             <div className='F4'>
             <img src="https://assets.website-files.com/5fa91ebb6639f6b5e05b166f/5fb791d3c13b62f314f18c64_FB.svg" alt="eror" width={'6%'}/>
              <h4>4.7M People Like this</h4>
             </div>
             <div className='F4'>
             <img src="https://assets.website-files.com/5fa91ebb6639f6b5e05b166f/5fb791d3db3f05e2947fad61_IG.svg" alt="eror" width={'8%'}/>
              <h4>1M Followers</h4>
             </div> 
            
          </div>
          <div className='F5'>
            <h1 >KEEP UP TO DATE</h1>
             <input type="text" placeholder='Enter Email Id'/>
             <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <hr />
      </div>
      
          
    
  )
}

export default Footer
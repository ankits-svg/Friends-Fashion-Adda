import { Button, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Otp.css'

function Otp() {

    const [otp, setOtp]=useState({
        val:"",
    })

    const toThanks=useNavigate()

    const handleOpt=(e)=>{
        setOtp({...otp,[e.target.name]:e.target.value})
    }

    const handleSubmit=()=>{
        if(otp.val==="1234"){
            toThanks('/cart/thanks')
        }else{
            alert("Invalid Otp")
        }

 }

  return (
    <div className='O1'>
        <input type="text" placeholder='OTP' name='val' value={otp.val} onChange={handleOpt}/>
        <Button colorScheme='blue' bg={'#FEC304'} onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default Otp
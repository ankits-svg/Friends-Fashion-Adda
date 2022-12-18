import { Box, Button, HStack, PinInput, PinInputField, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Otp.css'
import {Link as RouterLink} from 'react-router-dom'


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
        <RouterLink to='/'>
            <Box display={'flex'} ml='280px' textAlign={'center'}>
                <Text cursor='pointer' color={'#FEC304'} fontSize={'30px'} fontFamily={'Pacifico', 'cursive'} cursor='pointer'>Friend's</Text>
                <Text cursor='pointer' color={'#62615F'} fontSize={'30px'} fontFamily={'Pacifico', 'cursive'} cursor='pointer'>Fashion</Text>
                <Text cursor='pointer' color={'#FEC304'} fontSize={'30px'} fontFamily={'Pacifico', 'cursive'} cursor='pointer'>Adda</Text>
            </Box></RouterLink>
        <input type="text" placeholder='OTP' name='val' value={otp.val} onChange={handleOpt}/>
        <Button colorScheme='blue' bg={'#FEC304'} onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default Otp
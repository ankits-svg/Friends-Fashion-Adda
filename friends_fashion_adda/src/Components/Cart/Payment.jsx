import { Button } from '@chakra-ui/react'
import { AdUnits, CreditCard, Redeem, Savings, Wallet } from '@mui/icons-material'
import React from 'react'
import './Payment.css'
import PayInput from './PayInput'
import { useNavigate } from 'react-router-dom'

function Payment() {
    const toOTP =useNavigate();
    const handleSubmit=()=>{toOTP("/Cart/otp")}
    
  return (
    <div className='PY1'>
        <div className='PY2'>
            <div className='PY0'>
            <CreditCard/>
            <h2>Debit / Credit Card</h2>

            </div>
            <hr />
            <div>
            <Wallet/>
            <h2>Wallet</h2>

            </div>
            <hr />
            <div>
            <Savings/>
            <h2>UPI</h2>

            </div>
            <hr />
            <div>
            <AdUnits/>
            <h2>Net Banking</h2>

            </div>
            <hr />
            <div>
            <Redeem/>
            <h2>Cash On Delivery</h2>

            </div>
            <div>
            
            <h2></h2>

            </div>
        </div>
        <div className='PY5'>
            <PayInput/>
            
            <Button colorScheme='blue' bg={'#FEC304'} onClick={handleSubmit} mt='20px'>Pay</Button>
        </div>

    </div>
  )
}

export default Payment
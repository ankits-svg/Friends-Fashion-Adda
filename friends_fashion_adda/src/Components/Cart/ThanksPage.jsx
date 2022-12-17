import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import './ThanksPage.css'

function ThanksPage() {
  return (
    <div>
        <Card align='center'>
  <CardHeader>
    <Image className='TP1' src={"https://www.pngitem.com/pimgs/m/529-5296386_e-currency-exchange-hyip-amp-bitcoin-forum-hyip.png"} width='30%'/>
    <Heading size='md'>You're all set!</Heading>
  </CardHeader>
  <CardBody>
    <Box fontWeight={'bold'}>OrderNo:-#{Math.ceil(Math.random()*100000)}</Box>
    <Text>Thanks for being awesome,</Text>
    <Text>we hope you enjoy your purchase!</Text>
  </CardBody>
  <CardFooter>
    <RouterLink to='/'><Button colorScheme='blue' bg={'#FEC304'}>Continue Shopping</Button></RouterLink>
  </CardFooter>
</Card>
    </div>
  )
}

export default ThanksPage

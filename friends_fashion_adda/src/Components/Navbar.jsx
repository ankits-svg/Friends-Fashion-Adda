import { Box, Container,Text,Input,FormControl,Image,Heading,Wrap,HStack } from '@chakra-ui/react'
import image from '../Images/Logo.png'
import React from 'react'
import { FavoriteBorder, Search } from '@mui/icons-material'

import { BsCart } from 'react-icons/bs';

function Navbar() {
  return (
    <Container display={'flex'}>
        
        <Box p={2} display={'flex'} gap='60px' justifyContent={'space-evenly'} alignItems={'center'} textAlign='center' marginLeft={'-320px'}>
            <Box display={'flex'}>
                <Text cursor='pointer' color={'#FEC304'} fontSize={'30px'} fontFamily={'Pacifico', 'cursive'} cursor='pointer'>Friend's</Text>
                <Text cursor='pointer' color={'#62615F'} fontSize={'30px'} fontFamily={'Pacifico', 'cursive'} cursor='pointer'>Fashion</Text>
                <Text cursor='pointer' color={'#FEC304'} fontSize={'30px'} fontFamily={'Pacifico', 'cursive'} cursor='pointer'>Adda</Text>
            </Box>
            <Text cursor='pointer'>Men</Text>
            <Text cursor='pointer'>Women</Text>
            <Text cursor='pointer'>Mobile Covers</Text>
            
        </Box>
        <Box p={2} display={'flex'} gap='60px' justifyContent={'space-evenly'} alignItems={'center'} textAlign='center'>
        <FormControl isRequired display={'flex'} alignItems={'center'}  p={'5px'} border='1px solid lightgray' width='190px' borderRadius={'10px'}>
                <Search border='none'/> 
                <Input placeholder='Search Here Your Item' border={'none'}/>
                
            </FormControl>
            <Text>|</Text>
            <Text cursor='pointer'>Login</Text>
            <FavoriteBorder cursor='pointer'/>
            <BsCart cursor='pointer'/>

        </Box>
    </Container>
  )
}

export default Navbar
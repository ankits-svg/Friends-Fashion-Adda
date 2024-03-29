import { Box, Container,Text,Input,FormControl,Image,Heading,Wrap,HStack } from '@chakra-ui/react'
import image from '../Images/Logo.png'
import React from 'react'
import { FavoriteBorder, Search,ShoppingCartIcon } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { BsCart, BsCart2 } from 'react-icons/bs';
import { IconButton,StyledBadge } from '@mui/material'

function Navbar() {
  return (
    <Container display={'flex'} >
        
        <Box p={2} display={'flex'} gap='60px' justifyContent={'space-evenly'} alignItems={'center'} textAlign='center' marginLeft={'-320px'}>
            <RouterLink to='/'><Box display={'flex'}>
                <Text cursor='pointer' color={'#FEC304'} fontSize={'30px'} fontFamily={'Pacifico', 'cursive'} cursor='pointer'>Friend's</Text>
                <Text cursor='pointer' color={'#62615F'} fontSize={'30px'} fontFamily={'Pacifico', 'cursive'} cursor='pointer'>Fashion</Text>
                <Text cursor='pointer' color={'#FEC304'} fontSize={'30px'} fontFamily={'Pacifico', 'cursive'} cursor='pointer'>Adda</Text>
            </Box></RouterLink>
            <RouterLink to='/men'><Text cursor='pointer'>Men</Text></RouterLink>
            <RouterLink to='/women'><Text cursor='pointer'>Women</Text></RouterLink>
            <RouterLink to='/mobile'><Text cursor='pointer'>Mobile Covers</Text></RouterLink>
            
        </Box>
        <Box p={2} display={'flex'} gap='60px' justifyContent={'space-evenly'} alignItems={'center'} textAlign='center'>
        <FormControl isRequired display={'flex'} alignItems={'center'}  p={'5px'} border='1px solid lightgray' width='190px' borderRadius={'10px'}>
                <Search border='none'/> 
                <Input placeholder='Search Here Your Item' border={'none'}/>
                
            </FormControl>
            <Text>|</Text>
            <RouterLink to='/login'><Text cursor='pointer'>Login</Text></RouterLink>
            <RouterLink to='/register'><Text cursor='pointer'>Register</Text></RouterLink>
            <RouterLink to='/wishlist'><FavoriteBorder cursor='pointer'/></RouterLink>
            <RouterLink to='/cart'><BsCart cursor='pointer'/></RouterLink>
            

        </Box>
    </Container>
  )
}

export default Navbar
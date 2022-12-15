import React from 'react'
import { Container,Flex,Hstack,Image,Card, CardBody, CardFooter,Stack,Heading,Text,Divider,ButtonGroup,Button } from '@chakra-ui/react'
import {data3} from '../Components/ProductsData'
import { FavoriteBorder } from '@mui/icons-material'
import '../Style/styles.css'
import { SimpleSlider1 } from './Carousel/SimpleSlider1'
const ProductwithSlider = () => {
  return (
   
            <div>
                <h1>NEW ARRIVALS</h1>
                <SimpleSlider1/>
            </div>
        
    
  )
}

export default ProductwithSlider
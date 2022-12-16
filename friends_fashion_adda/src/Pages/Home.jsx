import React from 'react'
import Navbar from '../Components/Navbar'
import {Box } from '@chakra-ui/react'
import Announcement from '../Components/Announcement'
import Nav2 from '../Components/Nav2'
import {SimpleSlider} from '../Components/Carousel/SimpleSlider'
import '../Style/styles.css'
import StaticPic1 from '../Components/StaticPic1'
import ProductwithSlider from '../Components/ProductwithSlider'
import Footer from '../Components/Footer/Footer'
function Home() {
  return (
    // <Container className='H1' height={'80px'} backgroundColor={'white'} color='black' alignItems={'center'}>
        

    // </Container>
    <div className='H1'>
      
      <SimpleSlider/>
      <div className='P1'><img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg" alt="error" /></div>
      <StaticPic1/>
      <ProductwithSlider/>
      <Footer/>
    </div>
  )
}

export default Home
import { Container,Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button,Grid,HStack,GridItem } from '@chakra-ui/react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Pages/Navbar'
export default function Products() {
  const [pro,setPro]=useState([])
    const [loading,setLoading]=useState(false)


  const getdata=async()=>{
     setLoading(true)
    axios.get(`http://localhost:3000/Mens`)
        .then((res) => {
            console.log("res.data:",res.data)
            setPro(res.data)
          }).catch((error) => console.log("err:",error));
  }
       
    
  useEffect(() => {
   getdata()
  }, []);

  /*
  ""id": "1",
      "category": "shirt", p
      "image": "https://images.bewakoof.com/t540/modern-noise-red-checks-shirts-427965-1636955546-1.jpg", img
      "name": "Black Full Sleeve Shirt", h3
      "price": "699",h4
      "canceledprice": "1399", 
      "tribe": "₹ 719 For TriBe Members"
  */

  return(
    <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    <Navbar/>
  </GridItem>
  <GridItem pl='20' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'} gridTemplateColumns="repeat(3,1fr)">
    {pro.map((el)=>
    <Card maxW='md' >
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>)}
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
  )
}

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    HStack,
  } from '@chakra-ui/react';
import { FavoriteBorder, ShoppingBagOutlined } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import {Link as RouterLink} from 'react-router-dom'
  
  export default function ProductDetails() {

    const [product,setProduct]=useState({});
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8080/Products/${id}`).then(({data})=>setProduct(data)).catch((err)=>console.log("err:",err))
    },[id]);

    const {category,image,name,price,canceledprice,tribe}=product;
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={name}
              src={
                image
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ₹{price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text textDecoration={'line-through'}>₹{canceledprice}</Text>
                
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  {tribe}
                </Text>
  
                
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  {category}
                </Text>
            </Box>
            </Stack>
  
            <div className='PD1'>
            <RouterLink to={`/cart/${id}`}>
            <Button
              rounded={'none'}
              w={'100%'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={'#FFD84D'}
              color={'#494533'}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
            <ShoppingBagOutlined/>
              Add to Bag
            </Button>
            </RouterLink>
            <RouterLink to='/wishlist'>
            <Button
              rounded={'none'}
              border={'2px solid #494533'}
              w={'100%'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={'#FFFFFF'}
              color={'#494533'}
              borderColor={'#D6D6D6'}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
            <FavoriteBorder/>
             WishList
            </Button>
            </RouterLink>
            
            </div>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }
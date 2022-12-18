import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';


import { CurrencyRupeeOutlined, FavoriteBorder, ShoppingBagOutlined } from '@mui/icons-material';
import axios from 'axios';
  
  // const IMAGE =
  //   'https://images.unsplash.com/photo-1565691410967-4e1c68077b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1936&q=80';
  
  export default function SingleProductPage({
    id,category,image,name,price,cancel}) {

      const handleCart=()=>{
        const cartData = {
          productimage_url: image,
          productprice: price,
          productname: name,
          productcancelprice:cancel
        };
        axios.post(`http://localhost:8080/cart`, cartData);
        
        console.log("cartData:",cartData);
      }

      const handleWish=()=>{
        const WislistData = {
          productimage_url: image,
          productprice: price,
          productname: name,
          productcancelprice:cancel,
          
        };
          axios.post(`http://localhost:8080/wishlist`, WislistData);
          console.log("WislistData:",WislistData);
        };
      

    return (
      <Center py={12}>
       
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              // backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
            marginLeft={'40px'}
              rounded={'lg'}
              height={230}
              width={200}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {name}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {category}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text alignItems={'center'} fontWeight={800} fontSize={'xl'}>
              ₹{price}
              </Text>
              <Text align={'center'} textDecoration={'line-through'} color={'gray.600'}>
              ₹{cancel}
              </Text>
              <Text color={'GREEN'}>
             {Math.floor(Math.random()*100)}%OFF
              </Text>
            </Stack>
          </Stack>
          <Box  className='sp1'>
          <ShoppingBagOutlined onClick={handleCart} cursor='pointer'/>
          <FavoriteBorder onClick={handleWish} cursor='pointer'/>
          </Box>
        </Box>
       
      </Center>
    );
  }
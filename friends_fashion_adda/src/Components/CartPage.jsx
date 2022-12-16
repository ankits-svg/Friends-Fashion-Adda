import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,Button, Flex
  } from '@chakra-ui/react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
  
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function CartPage() {

    const [cart,setCart]=useState({})
    const [count,setCount]=useState(1)
    const {id}=useParams()

    const handleChange=(x)=>{
        setCount(x+count)
    }

    useEffect(() => {
        return axios.get(`http://localhost:8080/Products/${id}`).then(({data})=>{
            setCart(data)
        }).then((err)=>console.log("err:",err))
    }, [id])

    const {image,category,name,canceledprice,price}=cart
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
              backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
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
              <Text fontWeight={800} fontSize={'xl'}>
              ₹{price*count} 
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
              ₹{canceledprice*count} 
              </Text>
              <Flex>
                <Button disabled={count===1} onClick={()=>handleChange(-1)}>-</Button>
                <Button>{count}</Button>
                <Button onClick={()=>handleChange(+1)}>+</Button>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }
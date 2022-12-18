import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useEffect, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {Link as RouterLink, useNavigate} from 'react-router-dom'
import axios from 'axios';
  
  export default function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        fullName: "",
        email: "",
        password: ""
    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {
      const{ name, value } = e.target;
      setUserData({
          ...userData,
          [name]: value,
      });
      console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...data, userData]);

    axios.post('http://localhost:8080/register', userData).then(() => {
        alert('SignUp Successfully');
        navigate('/Home/login');

        setUserData({
            fullName: "",
            mobileNumber: "",
            email: "",
            password: ""
        });
        
    });
  }

    useEffect(() => {
      getData();
  },[]);

  const getData = () => {
      axios.get('http://localhost:8080/register').then((res) => {
          setData(res.data);
          console.log(res.data);
      });
  };
 

  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'md'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input type="text" value={userData.fullName} name='fullName' onChange={handleChange}/>
                  </FormControl>
                </Box>
                {/* <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box> */}
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={userData.email} name='email' onChange={handleChange}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={userData.password} name='password' onChange={handleChange}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={handleSubmit}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <RouterLink to='/login'><Link color={'blue.400'}>Login</Link></RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
import React from 'react'
import '../Style/styles.css'
import { Flex, Spacer,Center,Text,Square,Box } from '@chakra-ui/react'
function Nav2() {
  return (
    <div className='N1'>
    <Flex color='white'>
  <Flex  flex='1'>
    <Text color={'black'}>LIVE NOW!</Text>
  </Flex>
  <Flex flex='1'>
    <Text color={'black'}>MEN</Text>
  </Flex>
  <Box flex='1'>
    <Text color={'black'}>WOMEN</Text>
  </Box>
  <Box flex='1' >
    <Text color={'black'}>ACCESSORIES</Text>
  </Box>
  <Box flex='1'>
    <Text color={'black'}>WINTERWEAR</Text>
  </Box>
</Flex>
    </div>
  )
}

export default Nav2
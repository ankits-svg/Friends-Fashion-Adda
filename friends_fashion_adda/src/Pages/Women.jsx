import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import SingleProductPage from '../Components/SingleProductPage'
import { Flex,GridItem,Grid } from '@chakra-ui/react'

function Women() {

  const [data,setData]=useState([])

  useEffect(() => {
  return axios.get(`http://localhost:8080/womens`).then((res)=>{
    console.log(res.data);
    setData(res.data)
  }).catch((error)=>console.log("error:",error))
  }, [])

  
  return (
    <div>Womens
      <Grid templateColumns='repeat(4,1fr)' gap={6}>
      {data?.length > 0 && data.map((el)=>{
        return(
          <GridItem id={el.id}>
        <SingleProductPage
            id={el.id}
            category={el.category}
            image={el.image}
            name={el.name}
            price={el.price}
            cancel={el.canceledprice}/>
          </GridItem>
        ) 
        })}
      </Grid>
    </div>
  )
}

export default Women
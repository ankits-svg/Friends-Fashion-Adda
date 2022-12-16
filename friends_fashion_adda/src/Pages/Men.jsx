import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import SingleProductPage from '../Components/SingleProductPage'
import { Flex,GridItem,Grid } from '@chakra-ui/react'
import Loader from '../Components/Loader'


function Men() {

  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    setLoading(true)
  return axios.get(`http://localhost:8080/Mens`).then((res)=>{
    console.log(res.data);
    setData(res.data)
    setLoading(false)
  }).catch((error)=>{
    setLoading(true)
    console.log("error:",error)
  })
  }, [])
  return (
    <div>
      
        
      <Grid templateColumns='repeat(4,1fr)' gap={6}>
      {data?.length > 0 && data.map((el)=>{
        return(
          
         loading ? <Loader/> : <GridItem id={el.id}>
        <SingleProductPage
            id={el.id}
            category={el.category}
            image={el.image}
            name={el.name}
            price={el.price}
            cancel={el.canceledprice}/>
          </GridItem>)
         
        })}
      </Grid>
      
    </div>
  )
}

export default Men
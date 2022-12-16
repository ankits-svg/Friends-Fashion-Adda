import React from 'react'
import '../Style/styles.css'
import {data,data1,data2} from './ProductsData'


const StaticPic1 = () => {
  return (
    <div>
        <div className='SP1'>
            {data.map((el)=>
            <div><img src={el.img} alt={el.id}/>
            <p>{el.title}</p></div>
            )}
        </div>
        <div className='SP2'>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Split-Men-1670938024.jpg" alt="error" />
            </div>
            <div>
                <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Split-Women-1670938025.jpg" alt="error" />
            </div>
        </div>
        <div className='SP3'><h2>POPULAR CATEGORIES</h2></div>
        <div className='SP4'>
            {data1.map((el)=>
            <div>
                <img src={el.img} alt={el.id} />
                <p>{el.title}</p>
            </div>)}
        </div>
        <div className='SP4'>
        {data2.map((el)=>
            <div>
                <img src={el.img} alt={el.id} />
                <p>{el.title}</p>
            </div>)}
        </div>
    </div>
  )
}

export default StaticPic1
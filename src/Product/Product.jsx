import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Products } from './Products'
import { Vortex } from 'react-loader-spinner'
import './Product.css'

export const Product = () => {
    const [product,setProduct]=useState([])
    const [load,setLoad]=useState(true)

    const getProduct=async()=>{
        const responce=await axios.get(`https://fakestoreapi.com/products`)
        setProduct(responce?.data)
        setTimeout(()=>{
            setLoad(false)
        },3000)
    }

    useEffect(()=>{
        getProduct()
    },[])

    if(load){
        return(<div className="loader"><Vortex
            
            visible={true}
            height="150"
            width="150"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          /></div>)
    }
   

  return (
    <>
<br/>
    <Products pdata={product}/>
    
    </>
  )
}

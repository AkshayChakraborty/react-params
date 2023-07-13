import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CreateContext from './CreateContext'

const ContexState = ({children}) => {
    const [product,setProduct]=useState([])

    const getProduct=async()=>{
        const baseUrl='https://api.escuelajs.co/api/v1/products'
        const responce=await axios.get(`${baseUrl}`)
        setProduct(responce?.data)
    }

    useEffect(()=>{
        getProduct()
    },[])
  return (
    <>
    <CreateContext.Provider value={product}>
    {children}
    </CreateContext.Provider>
    
    </>
  )
}

export default ContexState
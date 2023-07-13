import React, { useEffect, useReducer,  useState } from 'react'
import CreatContext from './CreatContex'
import axios from 'axios'
import {Vortex} from 'react-loader-spinner'
import './ContexState.css'


const ContexState = ({children}) => {
 
  const [user, setUser] = useState([])
  const [product,setProduct]  =useState([])
  const [posts,setPosts]  =useState([])
  const [load,setLoad]=useState(true)
    

    const getUser = async () => {
      var BaseUrl = 'https://jsonplaceholder.typicode.com/users'
        const res1 = await axios.get(`${BaseUrl}`)
        setUser(res1?.data)
        setLoad (false)      
    }
    const getProduct = async () => {
      var BaseUrl = 'https://fakestoreapi.com/products'
        const res2 = await axios.get(`${BaseUrl}`)
        setProduct(res2?.data)
        setLoad (false)      
    }
    const getposts = async () => {
      var BaseUrl = 'https://jsonplaceholder.typicode.com/posts'
     
        const res3 = await axios.get(`${BaseUrl}`)
        setPosts(res3?.data)
        setLoad (false)      
    }

    useEffect(() => {
      getUser()
    }, [])
    useEffect(() => {
      getProduct()
    }, [])
    useEffect(() => {
      getposts()
    }, [])
    
    const allapi={user,product,posts}
    
  
    
  return (
    <>
    <CreatContext.Provider value={allapi}>
        {children}
    </CreatContext.Provider>
    
        

    
    </>
  )
}

export default ContexState
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export const ProductDetails = () => {
     
     const [details,setDetails]=useState([])
     const {id}=useParams()

     const getDetails=async()=>{
        const responce=await axios.get(`https://fakestoreapi.com/products/${id}`)
        setDetails(responce?.data)
     }

     useEffect(()=>{
        getDetails()
     },[])
     console.log(details);
  return (
    <>


<div className="container">
  <div className="row">
    <div className="col-sm">
      <div className="card" style={{width: '18rem' ,margin:'auto',marginTop:'50px'}}>
        <img src={details.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{details.title}</h5>
          <h5 className="card-title">Category : {details.category}</h5>
          <h5 className="card-title">Price : {details.price}</h5>
          <p className="card-text">Description : {details.description} </p>
          {/* <h5 className="card-title">{details.rating}</h5> */}
          
        </div>
      </div>
    </div>
  </div>
</div>


    
    </>
  )
}

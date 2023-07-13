import React, { useContext, useState } from 'react'
import CreatContext from './Contex/CreatContex'
import { Link } from 'react-router-dom'
export const Home = () => {
  

    const {user}=useContext(CreatContext)

   

   
    //console.log(finaluser);
  return (
    
    <>
    {/* {finaldata.explanation} */}
    
  <div className="container" >
  <div className="row" >
    {
      user.map((item,index)=>{
        return(
          <>

<div className="col-sm"  >
<div className="card" style={{width: '19rem', height:'320px'}}>
  {/* <img src={item.url} className="card-img-top" alt="..." style={{width:'300px', height:'300px'}} /> */}
 
 
  <div className="card-body">
    <h4 className="card-title">Name : {item.name}</h4>
    <h6>User Name : {item.username}</h6>
    <h6>Email : {item.email}</h6>
    <h6>Street : {item.address.street}</h6>
    {/* <Link to={`/fatch2/${item.id}`}>Photo Id</Link> */}
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
          
   

          
          </>
        )
      })
    }
     
    
    
  </div>
</div>

    
    </>
  )
}

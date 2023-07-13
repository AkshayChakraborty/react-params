import React, { useContext, useState } from 'react'
import CreatContext from './Contex/CreatContex'

export const Post = () => {
    const {posts}=useContext(CreatContext)

   

   
    //console.log(finaldata);
  return (
    
    <>
    {/* {finaldata.explanation} */}
    
  <div className="container" >
  <div className="row" >
    {
      posts.map((item,index)=>{
        return(
          <>

<div className="col-sm"  >
<div className="card" style={{width: '19rem', height:'400px'}}>
  {/* <img src={item.url} className="card-img-top" alt="..." style={{width:'300px', height:'300px'}} /> */}
 
  <div className="card-body">
    <h5 className="card-title">Title : {item.title}</h5>
    <h6>Body : {item.body}</h6>
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


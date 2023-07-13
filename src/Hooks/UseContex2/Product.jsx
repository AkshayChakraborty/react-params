import React, { useContext, useState } from 'react'
import CreatContext from './Contex/CreatContex'

export const Product = () => {
  const {product}=useContext(CreatContext)

   

   
  //console.log(finaldata);
return (
  
  <>
  {/* {finaldata.explanation} */}
  
<div className="container" >
<div className="row" >
  {
    product.map((item,index)=>{
      return(
        <>

<div className="col-sm"  >
<div className="card" style={{width: '19rem' , height:'800px'}}>
<img src={item.image} className="card-img-top" alt="..." style={{width:'300px', height:'300px'}} />
<h6></h6>
<div className="card-body">
  <h5 className="card-title">Title : {item.title}</h5>
  <h6>Description : {item.description}</h6>
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


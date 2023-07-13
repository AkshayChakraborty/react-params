import React, { useContext } from 'react'
import CreateContexs from './Contex/CreateContexs'

const AboutUser = () => {
    const finalData=useContext(CreateContexs)
  return (
    <>
 <div className="container" >
  <div className="row" >
    {
      finalData.map((item,index)=>{
        return(
          <>

<div className="col-sm"  >
<div className="card" style={{width: '18rem'}}>
  {/* <img src={item.url} className="card-img-top" alt="..." style={{width:'300px', height:'300px'}} /> */}
 <h1>{item.name}</h1>
  <div className="card-body">
    <h5 className="card-title">Email : {item.email }</h5>
    <h5 className="card-title">Phone : {item.phone }</h5>
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

export default AboutUser
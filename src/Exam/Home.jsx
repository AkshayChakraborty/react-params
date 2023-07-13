import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import InfiniteScroll from "react-infinite-scroll-component";
import CreateContext from './Contex/CreateContext';



const Home = () => {
  const product=useContext(CreateContext)

  const [limit,setLimit]=useState(6);

    const loadMore=()=>{
      setLimit(limit+6)
  }
  const slice=product.slice(0,limit)


  return (
    <>
      <div className="container">
      {/* <div
  id="scrollableDiv"
  style={{
    height: 600,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
  }}
> */}
      <InfiniteScroll
          dataLength={slice.length}
          next={loadMore}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
        
        
        <div className="row">     

          {
           slice.map((itam, index) => {
              return (
                <>
                  <div className="col-sm">
                    <div className="card" style={{ width: '18rem' }}>
                      <img src={itam.images} className="card-img-top" alt="..." />
                      <div className="card-body">

                        <h5 className="card-title">Card title {itam.title} </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={`/details/${itam.id}`} >Details</Link>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>

                  </div>


                </>
              )
            })
          }

        </div>


        </InfiniteScroll>
        {/* </div> */}
      </div>


    </>
  )
}

export default Home
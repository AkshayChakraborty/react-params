import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




export const Main = () => {
  const { id } = useParams()


  const [user, setUser] = useState([])
  const [limit,setLimit]=useState(6);


  const getUser = async () => {


    const res = await axios.get('https://api.github.com/users')

    setUser(res.data)
  }


  const slice=user.slice(0,limit)


  const loadMore=()=>{
      setLimit(limit+6)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>


      <div className="container">
        <div className="row">



          {
            slice.map((item, index) => {
              return (
                <>

                  <div className="col-sm">
                    <div className="card" style={{ width: '18rem' }}>
                      <img src={item.avatar_url} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>

                  </div>

                </>
              )
            })
          }

                  <div className='col-12 p-3'>
                    <div className='btn btn-primary w-100' onClick={loadMore}>Reaed More</div>
                    </div>


        </div>
      </div>


    </>
  )
}

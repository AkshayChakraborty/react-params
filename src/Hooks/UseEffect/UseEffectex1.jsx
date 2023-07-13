import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { PacmanLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'



const UseEffectex1 = () => {
    const { id, name } = useParams()




    const [photo, setPhoto] = useState([])
    const [limit,setLimit]=useState(6);
    const [load, setLoad] = useState(true)

    const getPhoto = async () => {
        const baseUrl = 'https://jsonplaceholder.typicode.com'
        const res = await axios.get(`${baseUrl}/photos`)
        
        setPhoto(res?.data)
        setLoad(false)
    }

    useEffect(() => {
        getPhoto()
    }, [])

    
    const slice=photo.slice(0,limit)


    const loadMore=()=>{
        setLimit(limit+6)
    }




    if (load) {
        return (<><PacmanLoader color="#36d7b7" /></>)
    }

    //console.log(photo);

    return (
        <>

            <div className="container">
                <h1>Api call Using usestate useEffect hooks</h1>
                <div className="row">
                    {

                        slice.map((item, index) => {
                            return (
                                <>
                                    <div className="col-sm-4">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <img src={item.thumbnailUrl} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title"> title : {item.title}</h5>
                                                <Link to={`/fatch2/${item.id}`}>Photo Id</Link>

                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                               <a class="btn btn-dark"> <Link to={`/fatch/${item.id}`}>About</Link></a>
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

export default UseEffectex1
import React, { useEffect, useState } from 'react'
import {NavLink, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const Fatch2 = () => {
    const { id, name } = useParams()

    const [photo, setPhoto] = useState([])

    const getPhoto = () => {

        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.log("res error");
                }
            })
            .then((data) => {

                setPhoto(data)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getPhoto()
    }, [])


    return (
        <>
{/* <h3><NavLink to='/'>Home</NavLink></h3> */}
            <div className="container">

                <div className="row">
                    {
                        <div className="col-lg">

                            <div className="card" style={{ width: '18rem' ,margin:'auto',marginTop:'30px' , backgroundColor:'' }}>
                                <img src={photo.thumbnailUrl} className="card-img-top" alt="..." />
                                <div className="card-body">

                                    <h3>{photo.albumId}</h3>
                                    <h5>{photo.id}</h5>
                                    <h5>{photo.title}</h5>
                                    <h5> {photo.url} </h5>
                                    <h5> {photo.thumbnailUrl} </h5>
                                </div>
                            </div>







                        </div>
                    }
                </div>
            </div>

        </>
    )
}

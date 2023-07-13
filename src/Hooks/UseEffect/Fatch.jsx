import React, { useEffect, useState } from 'react'
import {NavLink, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export const Fatch = () => {
    const { id, name } = useParams()

    const [photo, setPhoto] = useState([])

    const getPhoto = () => {

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
        <h3><NavLink to='/'>Home</NavLink></h3>

            <div className="container">

                <div className="row">
                    {
                        <div className="col-md">

                            <div className="card" style={{ width: '18rem',margin:'auto',marginTop:'100px' , backgroundColor:'rgb(255, 116, 121)'}}>
                                
                                <div className="card-body">
                                <h5>{photo.id}</h5>
                                    <h5>{photo.name}</h5>
                                    <h5>{photo.username}</h5>
                                    <h5>{photo.email}</h5>
                                    {/* <h5> {photo.address.suite} </h5>
                            <h6>{photo.address.street}</h6> */}

                                    <h5>{photo.phone}</h5>
                                    <h5>{photo.website}</h5>
                                </div>
                            </div>







                        </div>
                    }
                </div>
            </div>

        </>
    )
}

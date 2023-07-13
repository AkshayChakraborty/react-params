import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const UserData = () => {
    const [user, setUser] = useState([])
    const [load, setLoad] = useState(true)

    const baseUrl = 'https://jsonplaceholder.typicode.com'
    const getUser = async () => {
        const res = await fetch(`${baseUrl}/users`)
        const userData = await res?.json()
        setUser(userData)
        setLoad(false)
    }

    useEffect(() => {
        getUser()
    }, [])

    if (load) {
        return <Loading />
    }
    // console.log(user);
    return (
        <>
            <div className="container">
                <h1>Api call Using usestate useEffect hooks</h1>
                <div className="row">
                    {
                        user.map((item, index) => {
                            return (
                                <>
                                    <div className="col-md-4">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Name : {item.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Phone: {item.phone}</h6>
                                                <h6 className="card-subtitle mb-2 text-muted">id: {item.id}</h6>
                                                <h6>{item.address.street}</h6>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" className="card-link">Card link</a>
                                                <a href="#" className="card-link">Another link</a>
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

export default UserData
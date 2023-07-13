import React from 'react'
 import { NavLink } from 'react-router-dom'


export const Products = (props) => {
    const { pdata } = props
    console.log(pdata);
    return (
        <>

            <div className="container">
                <div className="row">

                    {
                        pdata?.map((item, index) => {
                            return (
                                <>
                                    <div className="col-sm">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <h5 className="card-title">Category : {item.category}</h5>
                                                <h5 className="card-title">Rating : {item.rating.rate}</h5>
                                                <h5 className="card-title">Count : {item.rating.count}</h5>
                                               
                                                <NavLink to={`/details/${item.id}`} className="btn btn-primary">Details</NavLink>
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

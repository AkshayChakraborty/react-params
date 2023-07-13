import React, { useState } from "react";

let a = [{ name: "akshay",
 email: "akshay@gmail.com",
  phone: "974647",
   roll: "98",
    place: 'jadavpur',
     job: "react" }
    ];

export const UseSate1 = () => {
  const [user, setUser] = useState(a);

  return (
    <>
      <h1>Hooks</h1>
      {user.map((item) => {
        return (
          <>
            {item.name}





            <div className="container">
              <div className="row">
                <div className="col-sm"><div className="card" style={{ width: '18rem' }}>

                  {

                    user.map((item) => {
                      return (
                        <>
                          <h1> {item.name}</h1>
                        </>
                      )
                    })

                  }
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                </div>
                <div className="col-sm"><div className="card" style={{ width: '18rem' }}>
                  {

                    user.map((item) => {
                      return (
                        <>
                          <h1>{item.email}</h1>
                        </>
                      )
                    })

                  }
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div></div>
                <div className="col-sm"><div className="card" style={{ width: '18rem' }}>
                  {

                    user.map((item) => {
                      return (
                        <>
                          <h1> {item.phone}</h1>
                        </>
                      )
                    })

                  }
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div></div>
              </div>
            </div>










            <div className="container">
              <div className="row">
                <div className="col-sm"><div className="card" style={{ width: '18rem' }}>
                  {

                    user.map((item) => {
                      return (
                        <>
                          <h1>{item.roll}</h1>
                        </>
                      )
                    })

                  }
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
                </div>
                <div className="col-sm"><div className="card" style={{ width: '18rem' }}>
                  {

                    user.map((item) => {
                      return (
                        <>
                          <h1>{item.place}</h1>
                        </>
                      )
                    })

                  }
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div></div>
                <div className="col-sm"><div className="card" style={{ width: '18rem' }}>
                  {

                    user.map((item) => {
                      return (
                        <>
                          <h1>{item.job}</h1>
                        </>
                      )
                    })

                  }
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div></div>
              </div>
            </div>






          </>
        );
      })}
    </>
  );
};

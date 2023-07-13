import React, { useState } from 'react'


let student={
    name:"akshay",
    email:"akshay@gmail.com",
    phone:"8954656212"
}

export const UseState2 = () => {

    const [user,setUser]=useState(student)

  return (
    <>
    <h1>my name is {user.name}</h1>
    <h3>my email {user.email}</h3>
    
    </>
  )
}

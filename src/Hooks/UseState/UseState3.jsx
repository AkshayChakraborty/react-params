import React, { useState } from 'react'

export const UseState3 = () => {

  const  [user,setUser]=useState("Akshay")
  
  const change=()=>{
    setUser("Chakraborty")
  }

  const reset=()=>{
    setUser("Akshay")
  }
  

  return (
    <>
    <h1>My name is {user}</h1>
    <button onClick={change}>Change</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

import React, { useState } from 'react'

export const UseState4 = () => {

    const [asnumber,setAsnumber]=useState(0)
    const [denumber,setDenumber]=useState(20)

    const asending=()=>{
      let a=asnumber+1
      setAsnumber(a)
    }


    const resetA=()=>{
      setAsnumber(0)
    }


    const resetD=()=>{
      setDenumber(20)
    }
    

  return (
    <>
   <h1> {asnumber}</h1>
    <button onClick={asending}>Click</button>
    <button onClick={resetA}>Reset</button>
   
    <h1>{denumber}</h1>
    <button onClick={()=>setDenumber((b)=>b-1)}>Click</button>
    <button onClick={resetD}>Reset</button>
    
    </>
  )
}

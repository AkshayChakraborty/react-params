import React, { useRef } from 'react'

const UseRef1 = () => {
    const inputRef=useRef(null)
    const handel=()=>{
        inputRef.current.value='akshay'
    }
  return (
    <>
    <h1>UseRef in React</h1>
    <label>Name</label>
    <input type='text' ref={inputRef}/>
    <button onClick={handel}>click</button>
    </>
  )
}

export default UseRef1
import React, { useRef } from 'react'

const UseRef2 = () => {
    const inputRef=useRef(null)
    const handel=()=>{
        alert(`name ${inputRef.current.value}`)
    }
  return (
    <>
    <form onChange={handel}>
        <lable>Name</lable>
        <input type='text' ref={inputRef}/>
        <button>click</button>
    </form>
    </>
  )
}

export default UseRef2
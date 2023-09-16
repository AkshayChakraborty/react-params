import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const UseCallback = () => {
    const [count,setCount]=useState(0)
    const [todos,setTodos]=useState([])

    const addTodos=useCallback(()=>{
        setTodos((pre)=>[...pre, 'new entry'])
    },[todos])
  return (
    <>
    <Todos data={todos} add={addTodos}/>
    <div>
        Count :{count}
        <button onClick={()=>setCount(count+1)}>Click Heare</button>
    </div>
    </>
  )
}

export default UseCallback
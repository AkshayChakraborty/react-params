import React, { memo } from 'react'

const Todos = (props) => {
    console.log('child component');
    const {data,add}=props
  return (
    <>
    {
        data.map((item,index)=>{
            return(
                <>
                <p key={index}>{item+index}</p>
                </>
            )
        })
    }
    <button onClick={add}>Add Todos</button>
    </>
  )
}

export default memo(Todos)
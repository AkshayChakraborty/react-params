import React from 'react'
import CreateContexs from './CreateContexs'

const ContexState = ({children}) => {
const user={
    name:"Akshay",
    email:"akshay@gmail.com",
    phone:"993393939393"
}

  return (
    <>
    <CreateContexs.Provider  value={user}>
    
      
        {children}
        
    </CreateContexs.Provider>
    </>
  )
}

export default ContexState
import React from 'react'
import CreateContexs from './CreateContexs'
export const ContexStateMap = ({children}) => {
    const state=[{
        name:"Akshay",
        email:"akshay@gmail.com",
        phone:"993393939393"
      }]
        return (
          <>
          <CreateContexs.Provider  value={state}>
          
            
              {children}
              
          </CreateContexs.Provider>
          </>
        )
      }

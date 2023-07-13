import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Fatch } from './Fatch'
import UseEffectex1 from './UseEffectex1'
import { Fatch2 } from './Fatch2'



export const Effect = () => {
  return (
    <>

<Router>
        <Routes>
         
          <Route path='/' element={<UseEffectex1/>}/>
          <Route path='/fatch/:id' element={<Fatch/>}/>
          <Route path='/fatch2/:id' element={<Fatch2/>}/>
        </Routes>
    </Router>
    
    </>
  )
}

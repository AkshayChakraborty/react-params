import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Result from './Result'
import AboutUser from './AboutUser'
import NavBar from './NavBar'
import ContexState from './Contex/ContexState'
import { ContexStateMap } from './Contex/ContexStateMap'

const ContexRouting = () => {
  return (
    <>
    <ContexState>
      <ContexStateMap>
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Result/>}/>
            <Route path='/about' element={<AboutUser/>}/>
        </Routes>
    </Router>
    </ContexStateMap>
    </ContexState>
   
        
    </>
  )
}

export default ContexRouting
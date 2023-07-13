import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ContexState from './Contex/ContexState'
import { Home } from './Home'
import { ContexUser } from './Contex/ContexUser'
import { Fatch2 } from './Fatch2'
import { Navbar } from './Navbar'
import { Product } from './Product'
import { Post } from './Post'


export const ContexRouting = () => {
  return (
    <>
    <ContexState>
      
        <Router>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/post' element={<Post/>}/>
               
               
            </Routes>
        </Router>
        
    </ContexState>
    
    </>
  )
}

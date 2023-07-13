import React from 'react'

import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom'
import { Product } from './Product'
import { ProductDetails } from './ProductDetails'
import { Navbar } from './Navbar'

export const ProductLink = () => {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Product/>}/>
            <Route path='/details/:id' element={<ProductDetails/>}/>
        </Routes>
    </Router>
    
    </>
  )
}

import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import ContexState from './Contex/ContexState'
// import Home from './Home'
import ProductDetails from './ProductDetails'
import Home from './Home'
const ContexRouter = () => {
  return (
    <>

    <ContexState>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/details/:id' element={<ProductDetails/>}/>
            </Routes>
        </Router>
    </ContexState>

    
    </>
  )
}

export default ContexRouter
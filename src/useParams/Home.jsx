import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link  to='/about/4/l'>About</Link>
      <Link to='/contact' >Contact</Link>
      <h1>This is Home page</h1>
    </div>
  )
}

export default Home
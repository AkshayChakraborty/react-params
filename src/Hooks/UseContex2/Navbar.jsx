import React from 'react'
import { NavLink,Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item ">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/product">Product</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/post">Post</Link>
      </li>
    </ul>
    
  </div>
</nav> 
    </>
  )
}

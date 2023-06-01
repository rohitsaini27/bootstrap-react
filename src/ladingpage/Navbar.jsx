import React from 'react'

const Navbar = () => {
  return (
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
        <a class="navbar-brand" href="#">Organic</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto my-2 my-lg-0">
            <li class="nav-item active">
                <a class="nav-link" href="home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="input">store</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact">contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="footer">more</a>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="px-2 search" type="search" placeholder="Search" aria-label="Search"/>
            <button class="button" type="submit">Search</button>
            </form>
        </div>
        </div>
        </nav>
  )
}

export default Navbar

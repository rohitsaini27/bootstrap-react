import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar bg-danger navbar-dark navbar-expand-lg'>
        <div className='container'>
            <h2 className='navbar-brand text-white'>Portfolio</h2>

            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navmenu'>
                <ul className='navbar-nav ms-auto navbarlinks'>
                    <li className='nav-item '>
                        <a href='#' className='nav-link text-white'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link text-white'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link text-white'>Project</a>
                    </li>
                </ul>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar
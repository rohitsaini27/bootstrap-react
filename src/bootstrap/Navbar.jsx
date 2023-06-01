import React, { useState } from 'react'

const Navbar = () => {
    // const [shownav , setshownav] = useState(true)

    // const togglenav = () => {
    //     setshownav(!shownav)
    // }
  return (
    <nav className='navbar bg-dark navbar-dark navbar-expand-lg fixed-top'>
        <div className='container'>
            <a href='#' className='navbar-brand'>FrontEnd Developer</a>

            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target='#navmenu'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navmenu'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                    <a href='#learn' className='nav-link'>What you'll learn</a>
                </li>
                <li className='nav-item'>
                    <a href='#questions' className='nav-link'>Questions</a>
                </li>
                <li className='nav-item'>
                    <a href='#instructions' className='nav-link'>Instructions</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
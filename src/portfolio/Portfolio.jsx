import React from 'react'
import Navbar from './Navbar'
import './Portfolio.css'
import Mains from './Mains'
import Projects from './Projects'
import Contact from './Contact'
const Portfolio = () => {
  return (
    <div>
        <Navbar/>
        <Mains/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Portfolio
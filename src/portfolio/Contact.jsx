import React from 'react'

const Contact = () => {
  return (
    <div className='p-5' style={{backgroundColor: '#303841'}}>
        <div className='container py-5'>
            <h1 className='text-center text-white' style={{fontWeight: '700'}}>Let's work together...</h1>
            <p className='text-center text-white lead'>How do you take your coffee</p>
            <div className='text-center py-4' style={{fontWeight:'500', fontSize:'30px'}}>
            <a href="#" className='mx-5'><i className="bi bi-twitter mx-3" ></i>Twitter</a>
            <a href="#" className='mx-5'><i className="bi bi-linkedin mx-3" ></i>Linkedin</a>
            <a href="#" className='mx-5'><i className="bi bi-facebook mx-3" ></i>Facebook</a>
            <a href="#" className='mx-5'><i className="bi bi-instagram mx-3" ></i>Instagram</a>
            </div>
        </div>
    </div>
  )
}

export default Contact
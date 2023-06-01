import React from 'react'

const Section = () => {
  return (
    <>
    <div className='bg-dark text-light p-5 mt-3 text-center text-sm-start'>
        <div className='container'>
            <div className='d-sm-flex'>
            <div>
                <h1>Become a <span className='text-warning'>Web Developer</span></h1>
                <p className='lead my-4'>
                We focus on teaching our students the fundametal of the latest and greatest technologies to prepare their first dev role. 
                </p>
                <button className='btn btn-primary btn-lg'>Enroll here</button>
            </div>
            <img className='img-fluid w-50 d-none d-sm-block' src="/img/showcase.svg" alt="image" />
            </div> 
        </div>
    </div>
    </>
  )
}

export default Section
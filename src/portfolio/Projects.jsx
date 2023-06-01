import React from 'react'

const Projects = () => {
  return (
    <div className='p-5' style={{background: '#45567d'}}>
        <div className='container py-5'>

            <h1 className='text-center text-white py-3'>Some of my Projects...</h1>
            <div className='d-flex align-items-center justify-content-between g-4'>
                <div>
                    <img className='img-fluid' src='/img/react.svg' />
                    <p className='text-center'>React project</p>
                </div>
                <div>
                    <img className='img-fluid' src='/img/react.svg' />
                    <p className='text-center'>React project</p>
                </div>
                <div>
                    <img className='img-fluid' src='/img/react.svg' />
                    <p className='text-center'>React project</p>
                </div>
                <div>
                    <img className='img-fluid' src='/img/react.svg' />
                    <p className='text-center'>React project</p>
                </div>
                <div>
                    <img className='img-fluid' src='/img/react.svg' />
                    <p className='text-center'>React project</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects
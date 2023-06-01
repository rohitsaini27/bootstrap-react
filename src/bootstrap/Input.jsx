import React from 'react'

const Input = () => {
  return (
    <div className='bg-primary text-light'>
    <div className='container p-5 '>
        <div className='d-flex justify-content-between align-item-center'>
            <h4 className='mb-3 mb-md-0'>
                Sign up here
            </h4>
            <div className='input-group news-input'>
                <input className='form-control' type='text' placeholder='enter email'/>
                <button className='btn btn-dark btn-lg' type='button'>Enter</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Input
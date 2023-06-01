import React from 'react'

const Input = () => {
  return (
    <div className='p-5 input'>
        <div className='container'>
            <div className='row'>
                <div className='col-7'>
                    <h2>SignUp here for further inquery</h2>
                </div>
                <div className='col-5'>
                    <form className='input-group'>
                        <input className='form-control inputtext' type='text'/>
                        <button className='btn btn-danger btn-lg inputbutton ml-3'>Enter</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Input
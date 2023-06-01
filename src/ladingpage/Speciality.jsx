import React from 'react'

const Speciality = () => {
  return (
    <div className='p-5 special'>
        <div className='container py-3 '>
            <div className='row py-4'>
                <div className='col-md specialtext'>
                    <h2 style={{color: '#44250e', fontWeight:'700' , fontSize: '30px'}}>Check out our special dish</h2>
                    <p className='explore'>explore something tasty</p> 
                    <button className='btn specialbutton text-white'>Check Here</button>
                </div>
                <div className='col-md'>
                    <img src='/images/item-8.jpeg' className='img-fluid' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Speciality
import React from 'react'

const Main = () => {
  return (
    <div className='p-5 main'>
        <div className='container align-items-center justify-content-center text-danger py-4'>
            <div className='row py-4 my-4'>
                {/* <div className='col-lg-7'>
                    <div>
                        <img className='img-fluid' src='/img/showcase.svg'/>
                    </div>
                </div> */}
                <div className='py-6 my-4 heading'>
                    <h2 className='text-center'>It's finger lickin' good.</h2>
                    <button className='btn btn-danger'>Open</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
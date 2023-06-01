import React from 'react'

const Boxex = () => {
  return (
    <div className='p-5'>
        <div className='container'>
            <div className='row g-4'>
            <div className="col-md">
            <div className='card bg-dark text-light'>
                <div className='card-body text-center'>
                    <div className='h1'>
                        <i className='bi bi-laptop'></i>
                    </div>
                    <h4 className='card-title'>Virtual</h4>
                    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam itaque quam corrupti libero?</p>
                    <button className='btn btn-primary'>Read More</button>
                </div>
            </div>
            </div>
            <div className="col-md">
            <div className='card bg-secondary text-white'>
                <div className='card-body text-center'>
                <div className='h1'>
                        <i className='bi bi-person-square'></i>
                    </div>
                    <h4 className='card-title'>Hybrid</h4>
                    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam itaque quam corrupti libero?</p>
                    <button className='btn btn-dark'>Read More</button>
                </div>
            </div>
            </div>
            <div className="col-md">
            <div className='card bg-dark text-light'>
                <div className='card-body text-center'>
                <div className='h1'>
                        <i className='bi bi-person'></i>
                    </div>
                    <h4 className='card-title'>In Person</h4>
                    <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam itaque quam corrupti libero?</p>
                    <button className='btn btn-primary'>Read More</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Boxex
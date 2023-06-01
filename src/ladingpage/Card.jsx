import React from 'react'

const Card = () => {
  return (
    <div className='p-5 carding'>
        <div className='container bg-warning p-3'>
            <h2 className='text-center p-5 pb-0'>What's Trending...</h2>
            <p className='text-center pt-0 pb-2'>eat something new everyday</p>
            <div className='row g-4'>
                <div className='col-md'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <img className='img-fluid' src='/images/item-1.jpeg'/>
                            <h4 className='card-title'>Lasange</h4>
                            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque magni similique a ab dolor rem ipsam quae.</p>
                            <a href="#" class="btn buttoncard">Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                    <div className='card-body text-center'>
                        <img className='img-fluid' src='/images/item-2.jpeg'/>
                        <h4 className='card-title'>English Breakfast</h4>
                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque magni similique a ab.</p>
                        <a href="#" class="btn buttoncard">Read More</a>
                    </div>
                </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                    <div className='card-body text-center'>
                        <img className='img-fluid' src='/images/item-5.jpeg'/>
                        <h4 className='card-title'>Burger</h4>
                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque magni similique a ab do.</p>
                        <a href="#" class="btn buttoncard">Read More</a>
                    </div>
                </div>
                </div>
                <div className='col-md'>
                    <div className='card'>
                    <div className='card-body text-center'>
                        <img className='img-fluid' src='/images/item-4.jpeg'/>
                        <h4 className='card-title'>Snadwitch</h4>
                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque magni similique a ab dolor .</p>
                        <a href="#" class="btn buttoncard">Read More</a>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Card
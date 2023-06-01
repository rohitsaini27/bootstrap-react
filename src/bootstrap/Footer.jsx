import React from 'react'

const Footer = () => {
  return (
    <section className='p-5 bg-dark text-white position-relative'>
        <div className='container text-center'>
            <h2 className='text-primary'>WebDev.com</h2>
            <a href="#"><i className="bi bi-twitter text-primary mx-1"></i></a>
            <a href="#"><i className="bi bi-linkedin text-primary mx-1"></i></a>
            <a href="#"><i className="bi bi-facebook text-primary mx-1"></i></a>
            <a href="#"><i className="bi bi-instagram text-primary mx-1"></i></a>
            <p class="lead mt-4">Copyright &copy; 2023 FrontEnd Bootcamp</p>

            <a href="#" class="position-absolute bottom-0 end-0 p-5">
            <i class="bi bi-arrow-up circle h1"></i>
            </a>
        </div>
    </section>

  )
}

export default Footer
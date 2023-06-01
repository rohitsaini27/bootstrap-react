import React from 'react'

const Instructor = () => {
  return (
    <section className="p-4 bg-primary" id="instructions">
      <div className="container">
        <h2 className="text-center text-white">Our Instructor</h2>
        <p className="text-center text-white lead">
          Our instructor all have 10+ years of exprerience as a web developer in
          FAANG type of company
        </p>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt="men"
                  className="rounded-circle mb-3"
                />
                <h4 className="card-title">Rohit Saini</h4>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur temporibus eum excepturi assumenda unde!
                </p>
                <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/24.jpg"
                  alt="men"
                  className="rounded-circle mb-3"
                />
                <h4 className="card-title">Mayank Sharma</h4>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur temporibus eum excepturi assumenda unde!
                </p>
                <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/30.jpg"
                  alt="men"
                  className="rounded-circle mb-3"
                />
                <h4 className="card-title">Meghan Sharma</h4>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur temporibus eum excepturi assumenda unde!
                </p>
                <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/31.jpg"
                  alt="men"
                  className="rounded-circle mb-3"
                />
                <h4 className="card-title">Anakansha yadav</h4>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur temporibus eum excepturi assumenda unde!
                </p>
                <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instructor
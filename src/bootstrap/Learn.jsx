import React from 'react'

const Learn = () => {
  return (
    <div>
        <section id="learn" className="p-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md">
            <img
              className="img-fluid"
              src="/img/fundamentals.svg"
              alt="fundamental"
            />
          </div>
          <div className="col-md p-5">
            <h2>Learn Fundamental</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur voluptatem, earum provident ipsum natus esse.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              quas modi pariatur nam deleniti dolor quidem, velit magni! Ut,
              beatae?
            </p>
            <a href="#" className="btn btn-light btn-lg">
              <i class="bi bi-chevron-right"></i>Read More</a
            >
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Learn
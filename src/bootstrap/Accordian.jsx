import React from 'react'

const Accordian = () => {
  return (
    <div className='p-5' id='questions'>
        <div className='container'>
            <h2 className='text-center'>Frequently asked questions</h2>
            <div className='accordion accordion-flush'>
            <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-1"
              >
                What exactly is Web Developer?
              </button>
            </h2>
            <div
              id="question-1"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt corrupti provident beatae, rem laboriosam pariatur
                molestias. Doloribus corporis, deleniti adipisci nisi laborum
                placeat ipsam facere quam aperiam pariatur incidunt et, id
                distinctio expedita odio ut sit laudantium dolorum mollitia!
                Delectus corrupti fugit temporibus aut perspiciatis quisquam
                non, molestias saepe odio?
              </div>
            </div>
          </div>
          {/* <!-- item 2 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-2"
              >
                How much time will it take to one became a web developer?
              </button>
            </h2>
            <div
              id="question-2"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
                facilis. Culpa dolore excepturi quas, quia quasi mollitia quae
                autem, beatae temporibus ipsam impedit. Quisquam nesciunt quas
                unde illo? Ut itaque distinctio dolorum amet, quo consequuntur
                facilis velit quae. Voluptates tempore asperiores cum aliquid
                facere? Ipsam rem reprehenderit est ratione doloremque dolore
                aperiam sequi cumque recusandae, optio vel, omnis quae. Ea.
              </div>
            </div>
          </div>
          {/* <!-- item 3 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-3"
              >
                What is the expectation as a Web Developer?
              </button>
            </h2>
            <div
              id="question-3"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quae quaerat obcaecati sed facilis, nulla cum officiis,
                repudiandae eos doloribus iusto blanditiis dolorum error quasi.
                Eaque et, quis inventore, doloremque neque dolore nemo magni
                facilis nihil dicta exercitationem qui alias fugiat quos
                aperiam! Iusto, cupiditate.
              </div>
            </div>
          </div>
          {/* <!-- item 4 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-4"
              >
                What is the prerequsite for this course?
              </button>
            </h2>
            <div
              id="question-4"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quae quaerat obcaecati sed facilis, nulla cum officiis,
                repudiandae eos doloribus iusto blanditiis dolorum error quasi.
                Eaque et, quis inventore, doloremque neque dolore nemo magni
                facilis nihil dicta exercitationem qui alias fugiat quos
                aperiam! Iusto, cupiditate.
              </div>
            </div>
          </div>
          {/* <!-- item 5 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-5"
              >
                How do i sign up?
              </button>
            </h2>
            <div
              id="question-5"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                quae quaerat obcaecati sed facilis, nulla cum officiis,
                repudiandae eos doloribus iusto blanditiis dolorum error quasi.
                Eaque et, quis inventore, doloremque neque dolore nemo magni
                facilis nihil dicta exercitationem qui alias fugiat quos
                aperiam! Iusto, cupiditate.
              </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Accordian
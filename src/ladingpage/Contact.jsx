import React from "react";

const Contact = () => {
  return (
    <div className="p-5 contact" id="contact">
      <div className="container">
        <div className="row ">
          <div className="col-lg-5 m-auto text-center">
            <h1 className="" style={{ fontWeight: "700" }}>
              Contact Us
            </h1>
            <p>always be in touch with us</p>
          </div>
          <div className="row py-5">
            <div className="col-lg-9 m-auto">
              <div className="row">
                <div className="col-lg-4">
                <h6>
                  <i class="bi bi-telephone-fill"></i> &nbsp;&nbsp;CALL US
                </h6>
                <p>+91 9287327633, +91 7827367382</p><br/><br/>
                <h6>
                  <i class="bi bi-geo-alt-fill"></i> &nbsp;&nbsp;LOCATION
                </h6>
                <p>Mohan Garder 121 , New Delhi</p><br/><br/>
                <h6>
                  <i class="bi bi-clock-fill"></i> &nbsp;&nbsp;BUISNESS HOURS
                </h6>
                <p>Mon - Fri... 10am-8pm, Sat-Sun... closed</p>
                <a href="#"><i className="bi bi-twitter mx-3" style={{color: '#a07917'}}></i></a>
                <a href="#"><i className="bi bi-linkedin mx-3" style={{color: '#a07917'}}></i></a>
                <a href="#"><i className="bi bi-facebook mx-3" style={{color: '#a07917'}}></i></a>
                <a href="#"><i className="bi bi-instagram mx-3" style={{color: '#a07917'}}></i></a>
                </div>
                <div className="col-lg-7 m-auto mt-0">
                <div className="row">
                    <div className="col-lg-6">
                        <input className="form-control" type="text" placeholder="Enter Name"/>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" type="text" placeholder="Enter address"/>
                    </div>
                </div>   
                <textarea rows='5' col='30' className="form-control my-5" placeholder="write your prefrences here"/> 
                <button className="btn form-control contactbutton">Submit</button> 
               </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

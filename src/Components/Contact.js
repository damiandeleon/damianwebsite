import React from "react";


const Contact = () => {
  return (
    <div id='contact' className='yellowBG' style={{ height: "100vh" }}>
      <div>
        <div id='top'>
          <div className='card-header h1 pt-2 pb-2'>
            <h1 style={{ color: "white" }}>Contact Me</h1>
          </div>
        </div>
        <div className='row'>
          <div className='contactPad'>
            <div className='card-background'>
              <div>
                <div className='col-md'>
                  <p>This is my contact information</p>
                  <hr></hr>
                  <p>
                    <i className='fas fa-envelope me-3' />
                    <a href='mailto:damianmdeleon@gmail.com'>
                      damianmdeleon@gmail.com
                    </a>
                  </p>
                  <p>
                    <i className='fas fa-phone me-3' />
                    <a href='tel:5125697525'>512-569-7525</a>
                  </p>
                  <p>
                    <i className='fas fa-map-marker-alt me-3'></i>
                    Austin, TX
                  </p>
                </div>
                <div className='mt-5'>
                  <p>Or send a message directly to me here</p>
                </div>

                <hr></hr>
                <form
                  style={{ backgroundColor: "black", opacity: ".85" }}
                  action='https://getform.io/f/de71c49e-3c1d-4e0b-bd18-6cea7ad61344'
                  method='POST'
                >
                  <div>
                    <label>Name :</label>
                    <div>
                      <input
                        className='mb-2'
                        type='text'
                        name='name'
                        // defaultValue='Full Name'
                      ></input>
                    </div>
                  </div>

                  <div>
                    <label>Email :</label>
                    <div>
                      <input
                        className='mb-2'
                        type='email'
                        name='email'
                        // defaultValue='email address'
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label>Message:</label>
                    <div>
                      <textarea
                        className='mb-2'
                        style={{
                          backgroundColor: "#fff",
                          height: "50px",
                          width: "235px",
                        }}
                        type='text'
                        name='message'
                        placeholder='Enter your message'
                        required='required'
                      ></textarea>
                    </div>
                  </div>
                  <button type='submit'>Send</button>
                  <p>
                    Powered by <a href='https://getform.io/' target='blank'>GetForm</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

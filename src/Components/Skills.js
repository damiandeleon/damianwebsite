import React from "react";

const Skills = () => {
  return (
    <main className='bgimg-1' style={{ color: "white" }}>
      <section className='bg-gradient-to-t from-gray-800 to-gray-500 rounded-lg shadow-2xl flex flex-col lg:items-center  justify-center container mx-auto'>
        <div className='grid grid-flow-row xl:grid-flow-col grid-cols-1 gap-20'>
          <div className='displayBackground'>
            <h2>Front End</h2>
            <section
              className='d-flex justify-content-around'
              style={{ maxHeight: "110px" }}
            >
              <div>
                {/* JavaScript */}
                <a
                  href='https://www.javascript.com/'
                  target='Javascript'
                  rel='noreferrer'
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ textDecorationLine: "none" }}>
                    <i className=' mt-2 fab fa-lg fa-js-square grow hover'></i>
                    <p className='iconLabel'>Javascript</p>
                  </div>
                </a>
              </div>

              {/* CSS3 */}
              <div>
                <a
                  href='https://www.w3.org/TR/CSS/#css'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <i className='fab mt-2 fa-lg fa-css3-alt grow hover'></i>
                    <p className='iconLabel'>CSS3</p>
                  </div>
                </a>
              </div>

              {/* React */}
              <div>
                <a
                  href='https://reactjs.org/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <i className='fab fa-react fa-lg mt-2 grow hover'></i>
                    <p className='iconLabel'>React</p>
                  </div>
                </a>
              </div>

              {/* HTML */}
              <div>
                <a
                  href='https://www.w3.org/TR/html52/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <i className='fab fa-html5 fa-lg mt-2 grow hover'></i>
                    <p className='iconLabel'>HTML5</p>
                  </div>
                </a>
              </div>

              <div>
                <a
                  href='https://getbootstrap.com/'
                  target='_blank'
                  rel='noreferrer'
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <i className='fab fa-bootstrap fa-lg mt-2 grow hover'></i>
                    <p className='iconLabel'>Bootstrap</p>
                  </div>
                </a>
              </div>
            </section>
          </div>
          <br />
          <br />
          <div className='displayBackground'>
            <h2>Back End</h2>
            <section>
              <div className='d-flex justify-content-around'>
                {/* MySQL */}
                <div>
                  <a
                    href='https://www.mysql.com/'
                    target='_blank'
                    rel='noreferrer'
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <i className='fas fa-database fa-lg mt-2 grow hover'></i>
                      <p className='iconLabel'>SQL</p>
                    </div>
                  </a>
                </div>

                {/* Sequelize */}
                <div>
                  <a
                    href='http://sequelize.org/'
                    target='_blank'
                    rel='noreferrer'
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <i className='fas fa-table fa-lg  mt-2 grow hover'></i>
                      <p className='iconLabel'>Sequelize</p>
                    </div>
                  </a>
                </div>

                {/* Java */}
                <div>
                  <a
                    href='https://www.java.com/'
                    target='_blank'
                    rel='noreferrer'
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <i className='fab fa-java fa-lg mt-2 grow hover'></i>
                      <p className='iconLabel'>Java</p>
                    </div>
                  </a>
                </div>

                {/* Node.js */}
                <div>
                  <a
                    href='https://nodejs.org/en/'
                    target='_blank'
                    rel='noreferrer'
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <i className='fab fa-node fa-lg mt-2 grow hover'></i>
                      <p className='iconLabel'>Node</p>
                    </div>
                  </a>
                </div>

                {/* MongoDB */}
                <div>
                  <a
                    href='https://www.mongodb.com/'
                    target='_blank'
                    rel='noreferrer'
                    style={{ textDecoration: "none" }}
                  >
                    <div>
                      <i className='fas fa-database fa-lg mt-2 grow hover'></i>
                      <p className='iconLabel'>MongoDB</p>
                    </div>
                  </a>
                </div>

                {/* Mongoose
                <div>
                  <a
                    className='flex p-0 flex-col'
                    href='https://mongoosejs.com/'
                    target='_blank'
                    rel='noreferrer'
                    style={{textDecoration: 'none'}}
                  >
                    <i
                      className='fas fa-otter mt-2'

                    ></i>{" "}
                  </a>
                  <p className='iconLabel'>Mongoose</p>
                </div> */}
              </div>
              <div></div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;

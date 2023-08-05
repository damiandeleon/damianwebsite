import React from "react";

const Project = (props) => {
  return (
    <div id='projects'>
      <div className='bgimg-1'>
        <div id='top'>
          <div className='card-header  pt-2 pb-2' style={{ color: "white" }}>
            <h1>My Work</h1>
            <p>Here are some of my latest projects</p>
          </div>
        </div>

        <div className='row'>
          <div className='portfolioPad'>
            <div className='CardPadPortfolio'>
              <div className='card-group colBackground justify-content-center margin-auto'>
                {props.details.map((project) => {
                  return (
                    <div key={project.id}>
                      <div
                        className='card hover'
                        style={{
                          border: '3px white solid',
                          perspective: "272px",
                          // border: "CornflowerBlue 5px solid",
                          borderRadius: "10px",
                          margin: "50px",
                          transition: "all .25s ease-in-out",
                          boxShadow: "0 1.5rem 3rem rgb(0 0 0 / 100%)",
                          color: "white",
                          fontWeight: "bold",
                          fontFamily: "Roboto",
                          background:
                            "linear-gradient(0deg, rgba(52,52,52,1) 0%, rgba(102,102,102,1) 58%, rgba(171,171,171,1) 100%)",
                          maxWidth: "400px",
                        }}
                      >
                        <div id={"logo"}>
                          <img
                            src={project.img}
                            className='card-img-top'
                            alt='project screenshot'
                          />
                        </div>
                        <p className='card-font'>{project.name}</p>
                        <div>
                          <p
                            style={{
                              fontSize: "11px",
                              paddingLeft: "40px",
                              paddingRight: "40px",
                            }}
                          >
                            {project.techStack}
                          </p>
                        </div>
                        <div
                          style={{
                            paddingLeft: "40px",
                            paddingRight: "40px",
                            fontSize: "12px",
                          }}
                        >
                          <p>{project.description}</p>
                        </div>
                        <div>
                          <div>
                            <a href={project.deployURL} target='blank'>
                              <p className='card-btn2 fa fa-2x'>Demo</p>
                            </a>
                            <a href={project.gitHubURL} target='blank'>
                              <i className='fa fa-github fa-2x card-btn' />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

import React from "react";

const Project = (props) => {
  const projectDetails = props.projectDetails;
  // console.log(projectDetails);
  return (
    <div
      className="Outer"
      id="projects"
      style={{
        boxSizing: "border-box",
        paddingTop: "70px",
      }}
    >
      <div className="bgimg-1">
        <div>
          <div
            className="card-header  pt-2 pb-2"
            style={{
              color: "rgb(236, 88, 0)",
              fontFamily: "Roboto",
            }}
          >
            <h2>My Work</h2>
            <p>Hover over any project to learn more!</p>
            <p style={{ color: "#696969", fontFamily: "karla" }}>
              Currently I am working on new projects to demonstrate what I've
              learned over the years. Be on the lookout for the upcoming MVPs!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="portfolioPad">
            <div className="CardPadPortfolio">
              <div className="card-group colBackground justify-content-center margin-auto">
                {projectDetails.map((project) => {
                  const techStack = Array.isArray(project.techStack)
                    ? project.techStack
                    : typeof project.techStack === "string"
                      ? project.techStack
                          .split(",")
                          .map((tech) => tech.trim())
                          .filter(Boolean)
                      : [];

                  return (
                    <div key={project.id}>
                      <div className="card hover project-card">
                        <div id={"logo"}>
                          <img
                            src={project.img}
                            className="card-img-top project-card__image"
                            alt="project screenshot"
                          />
                        </div>
                        <div className="project-card__overlay">
                          <p className="card-font">{project.name}</p>
                          <ul className="project-card__stack">
                            {techStack.map((tech, index) => {
                              return (
                                <li key={`${project.id}-${tech}-${index}`}>
                                  {tech}
                                </li>
                              );
                            })}
                          </ul>
                          <p className="project-card__description">
                            {project.description}
                          </p>
                          <div className="project-card__actions">
                            <a
                              href={project.deployURL}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <span className="card-btn2 fa fa-2x">Demo</span>
                            </a>
                            <a
                              href={project.gitHubURL}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="fa fa-github fa-2x card-btn" />
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

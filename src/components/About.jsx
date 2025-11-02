import React from "react";
import profilePic from "../Assets/Images/profilePicCircle.jpeg";
import Skills from "./Skills";

function About() {
  return (
    <div
      id="about"
      className="row card-background3"
      style={{
        paddingTop: "70px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <div
          // className='card-body ms-5 me-5'
          style={{ textAlign: "center" }}
        >
          <img
            src={profilePic}
            className="profilePic"
            alt="project screenshot"
            width="175px"
            style={{ borderRadius: "100px" }}
          />
          <article>
            <div className="profiledescription">
              <h2>Summary</h2>
              <p>
                Experienced Full Stack Web Developer | Tech Enthusiast |
                Transformation Expert
              </p>
            </div>
            <hr />
            <Skills></Skills>
          </article>
          <article>
            <div
              className="profiledescription"
              style={{ height: "100%", width: "65%", margin: "auto" }}
            >
              <p>
                I am a Full Stack Developer with 20+ years of experience in
                business services, including work with IBM, Facebook, Apple, and
                GM. After leading cross-functional teams and optimizing
                operations across Fortune 500s, I transitioned into tech to
                build scalable, user-focused web applications. My background in
                project management and process design gives me a unique edge in
                DevOps and Agile environments — and I have applied those skills
                to deliver real results in modern development stacks.
              </p>
              <p>
                After 23 years of success in the business services sector, I
                transitioned into full stack web development to apply my
                problem-solving mindset and technical acumen to modern software
                engineering. My passion for technology began early—building my
                first computer from scratch—and evolved into a deep commitment
                to creating scalable, user-centric applications that drive
                business value.
              </p>
              <p>
                I bring a cross-functional background in project management,
                process optimization, technical documentation, and quality
                assurance, which seamlessly complements my proficiency in Agile
                methodologies, DevOps practices, and full stack development. My
                experience includes building responsive web applications using
                JavaScript, React, Node.js, Express, and MongoDB, as well as
                integrating RESTful APIs, managing CI/CD pipelines, and
                deploying to AWS and Azure environments.
              </p>
              <p>
                My ability to translate complex client requirements into
                functional, maintainable code has been honed through years of
                stakeholder collaboration and operational leadership. I thrive
                in fast-paced environments where continuous learning, clean
                architecture, and performance optimization are key.
              </p>
              <p>
                If you're looking for a Full Stack Developer who combines
                enterprise-level experience with hands-on coding expertise and a
                growth-oriented mindset, I’d love to connect and explore how I
                can contribute to your team’s success.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import profilePic from "../Assets/Images/profilePicCircle.jpeg";

function About() {
  return (
    <div className="row card-background3">
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
          </article>
          <article>
            <div className="profiledescription" style={{ height: "100%", width: "65%", margin: "auto"}}>
              <h2>Why Web Development?</h2>
              <p>
                Are you ready to bring a seasoned Full Stack Web Developer into
                your team? With over two decades of experience in the Business
                Services Industry, including stints at industry giants like IBM,
                Facebook, Apple, and General Motors, I bring a unique blend of
                skills and a fresh perspective to the tech world.
              </p>
              <p>
                After thriving in the business services sector for 23 years, I
                decided to embark on a new journey. My motivation was simple:
                the ever-evolving tech industry, with its profound impact on our
                daily lives, beckoned me to join its ranks. I've always been
                driven by an insatiable curiosity for understanding how things
                work and a knack for problem-solving – whether it's delving into
                physiology and fitness or building my first computer from
                scratch.
              </p>
              <p>
                Throughout my career, I've excelled at translating client
                visions into reality, employing a versatile skill set that
                encompasses project management, process optimization, technical
                writing, operations oversight, and quality control. When I
                ventured into coding, I was pleasantly surprised to discover
                that my proficiency in these areas seamlessly translated into
                the world of DevOps and Agile development.
              </p>
              <p>
                Coding quickly became my newfound passion, not only for its
                technical challenges but also for its potential to revolutionize
                society and businesses alike. I am dedicated to continuous
                learning and growth, and I'm eagerly looking forward to the next
                exciting coding adventure.
              </p>
              <p>
                If you're seeking a seasoned Full Stack Web Developer with a
                fresh perspective and a relentless commitment to excellence,
                let's connect and explore the possibilities together. Your next
                breakthrough awaits.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;

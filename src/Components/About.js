import React from "react";
import profilePic from "../Assets/Images/profilePicCircle.jpeg";

function About() {
  return (
    <div
      className='row card-background3'
      style={{ height: "135vh" }}
    >
      <div>
        <div
          // className='card-body ms-5 me-5'
          style={{ textAlign: "center" }}
        >
          <img
            src={profilePic}
            className='profilePic'
            alt='project screenshot'
            width='175px'
            style={{ borderRadius: "100px" }}
          />
          <article>
            <div className='profiledescription'>
              <h2>Summary</h2>
              <p>
                Full Stack Web Developer with a Bachelors in Business and over
                20 years of experience in the Buseiness Services Industry
                working for companies like IBM, Facebook, Apple, and General
                Motors.
              </p>
            </div>
            <hr />
          </article>
          <article>
            <div className='profiledescription' style={{ height: "100%" }}>
              <h2>Why Web Development?</h2>
              <p>
                I chose after 23 years in the business services industry to
                change careers. I wanted to challenge myself and be a part of
                the tech industry as it grows and becomes more integrated in our
                daily lives.
                <br></br>I have a lifelong passion for figuring out how things
                work, and fixing things; be it from learning about physiology
                and fitness, to tearing down and building my first comptuer. My
                career has been built on taking what clients wanted for their
                businesses and making it happen. I used various skills such as
                project managmeent, process mangement, technical writing,
                operations management, and quality management to be successful.
                When I discovered coding, I found that those skills tranfsered
                perfectly into the DevOps and the Agile development concepts. I
                found a passion in coding and its ability to impact society and
                businesses. I never stop coding and I'm excited to tackle what's
                next.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;

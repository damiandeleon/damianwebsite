import React from "react";
import profilePic from "../Assets/Images/profilePicCircle.jpeg";
import profile from "../Assets/Images/profilepic.jpg";

function About() {
  return (
    <div
      id="about"
      className="row Outer"
      style={{
        paddingTop: "140px",
        boxSizing: "border-box",
        paddingBottom: "140px",
      }}
    >
      <div>
        <div
          // className='card-body ms-5 me-5'
          style={{ textAlign: "center" }}
        >
          <article>
            <div>
              <div
                className="card-header  pt-2 pb-2"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  fontFamily: "karla",
                  color: "#696969",
                }}
              >
                <div>
                  <h2 style={{ color: "rgb(236, 88, 0)" }}>About Me 🫶🏼</h2>
                  <p>
                    Full Stack Web Developer with a bachelor’s in business and
                    over 20 years of experience working for companies like IBM,
                    Facebook, Apple, and General Motors. Recognized and endorsed
                    by former colleagues in Vendor Management and Business
                    Performance Management. Earned certificates from the
                    University of Texas in Austin Coding Boot Camp and SMU,
                    focusing on Java and React Native. I am skilled in HTML,
                    CSS, Bootstrap, and React.js, with a passion for continuous
                    learning. Efficient, strategic thinker with adaptability to
                    changing conditions. Dedicated to building websites and apps
                    that provide practical services to people and businesses.
                    Seeking to join a fast-paced, quality-driven team to make a
                    positive impact
                  </p>
                  <p>
                    I bring a cross-functional background in project management,
                    process optimization, technical documentation, and quality
                    assurance, which seamlessly complements my proficiency in
                    Agile methodologies, DevOps practices, and full stack
                    development. My experience includes building responsive
                    applications using a suite of program languages.
                  </p>
                </div>
                <div>
                  <img
                    src={profile}
                    style={{
                      maxWidth: "18.0rem",
                      borderRadius: "15%",
                      marginTop: "20px",
                      marginLeft: "50px",
                    }}
                    alt="down arrow"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default About;

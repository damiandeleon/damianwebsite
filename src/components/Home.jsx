import React, { useEffect, useState } from "react";
import "../index.css";
import image from "../Assets/Images/cartoon-portrait.png";

function Home() {
  return (
    <>
      <div
        id="main"
        className="row neonCity"
        style={{
          height: "99vh",
          width: "100vw",
          marginTop: "0",
          marginLeft: "0",
          marginRight: "0",
          position: "relative",
          overflow: "hidden",
          left: "0",
          top: "0",
        }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <div>
            <div
              className="introCard text-center fade-in"
              style={{
                backgroundColor: "rgba(241, 236, 228, 0.6)",
                color: "rgb(236, 88, 0)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <div>
                <h2>Hi! I'm Damian DeLeon. 👋🏼</h2>
                <p style={{ color: "#696969" }} className="subtitle">
                  Multi disciplinary{" "}
                  <span style={{ color: "rgb(236,88,0)" }}>developer </span>{" "}
                  with a passion for making life easier for people through
                  technology.
                </p>
              </div>
              <div>
                <img
                  src={image}
                  style={{ maxWidth: "150px" }}
                  alt="image of a cartoon portrait of the developer"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        >
          <i
            className="fa-solid fa-angles-down"
            style={{ color: "rgb(236, 88, 0)", fontSize: "1.8rem" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

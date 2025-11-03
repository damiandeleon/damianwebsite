import React, { useEffect, useState } from "react";
import "../index.css";

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
                backgroundColor: "rgba(128, 128, 128, 0.8)",
                fontSize: "29px",
              }}
            >
              <p>HELLO, I'M DAMIAN DELEON.</p>
              <p style={{ fontSize: "20px" }}>FULL STACK WEB DEVELOPER </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

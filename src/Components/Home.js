import React from "react";
import "../../src/index.css";

function Home() {
  return (
    <>
      <div id='home' className='row neonCity ' style={{ height: "100vh" }}>
        <div>
          <div>
            <div className='introCard text-center fade-in' style={{backgroundColor: "lightGreen", fontSize: '29px'}}>
              <p>HELLO, I'M DAMIAN DELEON.</p>
              <p style={{fontSize: '20px'}}>FULL STACK WEB DEVELOPER </p>
              <p style={{fontSize: '20px'}}>RECORDING ARTIST </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

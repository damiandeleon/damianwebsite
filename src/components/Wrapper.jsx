import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import ProjectList from "./ProjectList";
import About from "./About";
import Footer from "./Footer";

function Wrapper() {
  return (
    <>
      <div id="home"></div>
      <Home />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  );
}

export default Wrapper;

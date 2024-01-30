import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import ProjectList from "./ProjectList";
import About from "./About";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import MusicList from "./MusicList";

function Wrapper() {
  return (
    <>
      <Home />
      <ProjectList />
      <Skills />
      <AboutMe />
      <About />
      <MusicList />
      <Contact />
      <Footer />
    </>
  );
}

export default Wrapper;

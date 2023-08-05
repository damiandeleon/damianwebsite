import React from "react";
import DamianResume from "../Assets/Damian_Deleon_Resume.pdf";
import ResumeIcon from "../Assets/Images/resumeIcon.png";

function Navigation() {
  return (
    <>
      <nav className='navbar navbar-fixed-left'>
        <div className='container'>
          <div className='navbar-header' style={{ fontSize: "10px" }}>
            <p
              style={{
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                margin: "0px 0px 0px 0px",
              }}
            >
              -Nav-
            </p>
            <a
              className='nav-link active'
              aria-current='page'
              title='Home'
              href='#home'
            >
              <i className='fas fa-home fa-2x grow hover'></i>
            </a>
            <a className='nav-link' title='My Work' href='#projects'>
              <i className='fas fa-th fa-2x grow hover'></i>
            </a>
            <a className='nav-link' title='About' href='#about'>
              <i className='fas fa-user-astronaut fa-2x grow hover'></i>
            </a>
            <a className='nav-link' title='Contact Me' href='#contact'>
              <i className='fas fa-envelope fa-2x grow hover'></i>
            </a>
            <p></p>
            <p
              style={{
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                margin: "0px 0px 0px 0px",
              }}
            >
              -Links-
            </p>
            <a
              className='nav-link'
              href='https://www.linkedin.com/in/damian-deleon-051b4b2b/'
              target='blank'
              title='Linked In'
            >
              <i className='fab fa-linkedin fa-2x grow hover'></i>
            </a>

            <a
              className='nav-link'
              href='https://github.com/damiandeleon'
              target='blank'
              title="Github"
            >
              <i className='fab fa-github fa-2x grow hover'></i>
            </a>

            <a
              className='nav-link'
              href={DamianResume}
              target='blank'
              title='Resume Download'
            >
              <img
                className='grow hover'
                src={ResumeIcon}
                height='20px'
                alt='resume icon'
              ></img>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

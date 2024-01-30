import React from "react";
import DamianResume from "../Assets/Resume-Damian-DeLeon.pdf";

function Navigation() {
  return (
    <>
      <nav className='navbar navbar-fixed-left'>
        <div className='container'>
          <div className='navbar-header'>
            <p
              style={{
                color: "white",
                fontSize: "14px",
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
              <i className='fas fa-home fa-2x grow hover' style={{color: 'whtie'}}></i>
            </a>
            <a className='nav-link' title='My Work' href='#projects'>
              <i className='fas fa-th fa-2x grow hover'  style={{color: 'whtie'}}></i>
            </a>
            <a className='nav-link' title='About' href='#about'>
              <i className='fas fa-user-astronaut fa-2x grow hover' style={{color: 'whtie'}}></i>
            </a>
            <a className='nav-link' title='Music' href='#music'>
              <i className='fas fa-music fa-2x grow hover' style={{color: 'whtie'}}></i>
            </a>
            <a className='nav-link' title='Contact Me' href='#contact'>
              <i className='fas fa-envelope fa-2x grow hover' style={{color: 'whtie'}}></i>
            </a>
            <p></p>
            <p
              style={{
                color: "white",
                fontSize: "14px",
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
              <i className='fab fa-linkedin fa-2x grow hover' style={{color: 'whtie'}}></i>
            </a>

            <a
              className='nav-link'
              href='https://github.com/damiandeleon'
              target='blank'
              title="Github"
            >
              <i className='fab fa-github fa-2x grow hover' style={{color: 'whtie'}}></i>
            </a>

            <a
              className='nav-link'
              href={DamianResume}
              target='blank'
              title='Resume Download'
            >
              <i
                className='fas fa-file-pdf fa-2x grow hover'
                style={{color: 'whtie'}}
                height='20px'
                alt='resume icon'
              ></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Resume from "./Resume";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu(); // Close mobile menu after navigation
    }
  };

  const openResumeInNewWindow = () => {
    const newWindow = window.open(
      "",
      "_blank",
      "width=800,height=600,scrollbars=yes,resizable=yes"
    );
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Damian's Resume</title>
            <meta charset="UTF-8" />
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 40px;
                background-color: #f9f9f9;
                color: #333;
              }
              h1, h2, h3 {
                color: #2c3e50;
              }
              .section {
                margin-bottom: 40px;
              }
              .contact a {
                color: #2980b9;
                text-decoration: none;
              }
              ul {
                padding-left: 20px;
              }
              .job-title {
                font-weight: bold;
              }
              .company {
                font-style: italic;
              }
              .date {
                color: #777;
              }
              .skills span {
                display: inline-block;
                background-color: #ecf0f1;
                padding: 5px 10px;
                margin: 5px;
                border-radius: 4px;
              }
            
            </style>
          </head>
          <body>
            <div id="resume-root"></div>
          </body>
        </html>
      `);
      newWindow.document.close();

      const container = newWindow.document.getElementById("resume-root");
      if (container) {
        const root = createRoot(container);
        root.render(<Resume />);
      }
    }
    closeMenu(); // Close mobile menu after opening resume
  };

  const navItems = [
    { id: "home", label: "Home", icon: "fas fa-home" },
    { id: "about", label: "About", icon: "fas fa-user-astronaut" },
    { id: "projects", label: "Projects", icon: "fas fa-th" },
    { id: "contact", label: "Contact", icon: "fas fa-envelope" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/damian-deleon-051b4b2b/",
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      color: "#0077b5",
    },
    {
      href: "https://github.com/damiandeleon",
      icon: "fab fa-github",
      title: "GitHub",
      color: "#333",
    },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: isScrolled
            ? "0 2px 20px rgba(0, 0, 0, 0.1)"
            : "0 2px 10px rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s ease",
          zIndex: 1000,
          padding: "0 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
          }}
        >
          {/* Logo/Brand */}
          <div
            onClick={() => scrollToSection("home")}
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#333",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#007bff")}
            onMouseLeave={(e) => (e.target.style.color = "#333")}
          >
            Damian DeLeon
          </div>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
            }}
          >
            {/* Navigation Links - Hidden on mobile */}
            <div
              style={{
                display: window.innerWidth <= 768 ? "none" : "flex",
                alignItems: "center",
                gap: "30px",
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#333",
                    fontSize: "16px",
                    fontWeight: "500",
                    cursor: "pointer",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#007bff";
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#333";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <i className={item.icon} style={{ fontSize: "14px" }}></i>
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social Links & Resume - Hidden on mobile */}
            <div
              style={{
                display: window.innerWidth <= 768 ? "none" : "flex",
                alignItems: "center",
                gap: "15px",
                paddingLeft: "20px",
                borderLeft: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#f8f9fa",
                    color: social.color,
                    fontSize: "18px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = social.color;
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#f8f9fa";
                    e.target.style.color = social.color;
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}

              <button
                onClick={openResumeInNewWindow}
                title="View Resume"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 10px rgba(0, 123, 255, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#0056b3";
                  e.target.style.transform = "translateY(-3px)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(0, 123, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#007bff";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 2px 10px rgba(0, 123, 255, 0.3)";
                }}
              >
                <i className="fas fa-file-pdf"></i>
              </button>
            </div>

            {/* Hamburger Menu Button - Visible only on mobile */}
            <button
              onClick={toggleMenu}
              style={{
                display: window.innerWidth <= 768 ? "flex" : "none",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "5px",
              }}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  width: "25px",
                  height: "3px",
                  backgroundColor: "#333",
                  margin: "2px 0",
                  transition: "all 0.3s ease",
                  transform: isMenuOpen
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              ></span>
              <span
                style={{
                  width: "25px",
                  height: "3px",
                  backgroundColor: "#333",
                  margin: "2px 0",
                  transition: "all 0.3s ease",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              ></span>
              <span
                style={{
                  width: "25px",
                  height: "3px",
                  backgroundColor: "#333",
                  margin: "2px 0",
                  transition: "all 0.3s ease",
                  transform: isMenuOpen
                    ? "rotate(-45deg) translate(7px, -6px)"
                    : "none",
                }}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? "visible" : "hidden",
            transition: "all 0.3s ease",
            padding: "20px",
            display: window.innerWidth <= 768 ? "block" : "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#333",
                  fontSize: "18px",
                  fontWeight: "500",
                  cursor: "pointer",
                  padding: "15px 20px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textAlign: "left",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#f8f9fa";
                  e.target.style.transform = "translateX(10px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                <i
                  className={item.icon}
                  style={{ fontSize: "16px", width: "20px" }}
                ></i>
                {item.label}
              </button>
            ))}

            {/* Mobile Social Links */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                marginTop: "10px",
              }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#f8f9fa",
                    color: social.color,
                    fontSize: "20px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={closeMenu}
                >
                  <i className={social.icon}></i>
                </a>
              ))}

              <button
                onClick={openResumeInNewWindow}
                title="View Resume"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 10px rgba(0, 123, 255, 0.3)",
                }}
              >
                <i className="fas fa-file-pdf"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
            display: window.innerWidth <= 768 ? "block" : "none",
          }}
        />
      )}

      {/* Add responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .mobile-menu {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navigation;

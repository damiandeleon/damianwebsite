import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="yellowBG"
      style={{
        height: "calc(100vh - 70px)",
        paddingTop: "70px",
        boxSizing: "border-box",
      }}
    >
      <div>
        <div id="top">
          <div className="card-header pt-2 pb-2">
            <h1 style={{ color: "white" }}>Contact Me</h1>
          </div>
        </div>
        <div className="row">
          <div className="contactPad">
            <div className="card-background">
              <div>
                <div className="col-md">
                  <p>This is my contact information</p>
                  <hr></hr>
                  <p>
                    <i className="fas fa-envelope me-3" />
                    <a href="mailto:damianmdeleon@gmail.com">
                      damianmdeleon@gmail.com
                    </a>
                  </p>
                  <p>
                    <i className="fas fa-phone me-3" />
                    <a href="tel:5125697525">512-569-7525</a>
                  </p>
                  <p>
                    <i className="fas fa-map-marker-alt me-3"></i>
                    West Coast, CA, USA
                  </p>
                </div>
                <hr></hr>
                <div className="mt-3">
                  <p>Or send a message directly to me here</p>
                </div>
                <form
                  style={{
                    display: "block",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderRadius: "12px",
                    padding: "20px",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    maxWidth: "500px",
                    margin: "0 auto",
                  }}
                  action="https://getform.io/f/de71c49e-3c1d-4e0b-bd18-6cea7ad61344"
                  method="POST"
                >
                  <div style={{ marginBottom: "16px" }}>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontWeight: "600",
                        color: "#333",
                        fontSize: "13px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "2px solid #e1e5e9",
                        borderRadius: "8px",
                        fontSize: "15px",
                        backgroundColor: "#fff",
                        transition: "all 0.3s ease",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#007bff";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(0, 123, 255, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e1e5e9";
                        e.target.style.boxShadow = "none";
                      }}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontWeight: "600",
                        color: "#333",
                        fontSize: "13px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "2px solid #e1e5e9",
                        borderRadius: "8px",
                        fontSize: "15px",
                        backgroundColor: "#fff",
                        transition: "all 0.3s ease",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#007bff";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(0, 123, 255, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e1e5e9";
                        e.target.style.boxShadow = "none";
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label
                      htmlFor="message"
                      style={{
                        display: "block",
                        marginBottom: "6px",
                        fontWeight: "600",
                        color: "#333",
                        fontSize: "13px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="3"
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "2px solid #e1e5e9",
                        borderRadius: "8px",
                        fontSize: "15px",
                        backgroundColor: "#fff",
                        transition: "all 0.3s ease",
                        outline: "none",
                        resize: "vertical",
                        fontFamily: "inherit",
                        boxSizing: "border-box",
                        minHeight: "80px",
                        maxHeight: "120px",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#007bff";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(0, 123, 255, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e1e5e9";
                        e.target.style.boxShadow = "none";
                      }}
                      placeholder="Tell me about your project, questions, or just say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "12px 20px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "15px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "12px",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#0056b3";
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 4px 12px rgba(0, 123, 255, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#007bff";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    Send Message
                  </button>

                  <p
                    style={{
                      textAlign: "center",
                      margin: "0",
                      fontSize: "12px",
                      color: "#666",
                      opacity: "0.8",
                    }}
                  >
                    Powered by{" "}
                    <a
                      href="https://getform.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      GetForm
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

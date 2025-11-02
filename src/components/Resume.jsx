import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import GensparkI from "../assets/Images/logo_genspark.jpg";
import HexawareI from "../assets/Images/logo_hexaware.webp";
import ConcentrixI from "../assets/Images/logo_concentrix.webp";
import IBMI from "../assets/Images/logo_IBM.webp";
import SitelI from "../assets/Images/logo_sitelgroup.jpg";
import TTUI from "../assets/Images/logo_TTU.webp";
import UOPI from "../assets/Images/logo_UOP.webp";
import UTI from "../assets/Images/logo_UT.webp";

const Resume = () => {
  const resumeRef = useRef();

  const downloadPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: 0.5,
      filename: "Damian_DeLeon_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        letterRendering: true,
        scrollX: 0,
        scrollY: 0,
        width: element.scrollWidth,
        height: element.scrollHeight,
      },
      jsPDF: {
        unit: "in",
        format: "letter",
        orientation: "portrait",
        compress: true,
      },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "white",
        color: "black",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      {/* Download Button */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
          "@media print": { display: "none" },
        }}
      >
        <button
          onClick={downloadPDF}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#0056b3";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.transform = "translateY(0)";
          }}
        >
          📄 Download as PDF
        </button>
      </div>

      {/* Resume Content */}
      <div
        ref={resumeRef}
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          fontSize: "14px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "10px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Damian DeLeon
        </h1>

        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
            paddingBottom: "20px",
            borderBottom: "2px solid #333",
          }}
        >
          <p style={{ margin: "5px 0", fontSize: "16px" }}>
            Austin, Texas, United States
          </p>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            Email:{" "}
            <a
              href="mailto:damianmdeleon@gmail.com"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              damianmdeleon@gmail.com
            </a>
          </p>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/damian-deleon-051b4b2b"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              linkedin.com/in/damian-deleon-051b4b2b
            </a>
          </p>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            Phone: 512-569-7525
          </p>
          <p style={{ margin: "5px 0", fontSize: "14px" }}>
            Portfolio:{" "}
            <a
              href="https://damiandeleon.github.io/damianwebsite/"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              damiandeleon.github.io/damianwebsite
            </a>
          </p>
        </div>

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #007bff",
              paddingBottom: "5px",
              fontSize: "20px",
              marginBottom: "15px",
            }}
          >
            Summary
          </h2>
          <p
            style={{
              textAlign: "justify",
              lineHeight: "1.6",
              fontSize: "14px",
              color: "#555",
            }}
          >
            AWS Associate Developer certified Full Stack Web Developer.
            Certificate from UT Austin Coding Boot Camp. Skilled in Java,
            JavaScript, Angular, ReactJS, Spring Boot, SQL, Docker, HTML, CSS,
            and Bootstrap. Passionate about Generative AI and applying it to
            creative and professional projects. Over 20 years of experience with
            IBM, Facebook, Apple, and GM.
          </p>
        </div>

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #007bff",
              paddingBottom: "5px",
              fontSize: "20px",
              marginBottom: "15px",
            }}
          >
            Experience
          </h2>
          <h3
            style={{
              color: "#333",
              fontSize: "16px",
              fontWeight: "bold",
              margin: "15px 0 5px 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>
              <img
                src={HexawareI}
                alt="Hexaware Technologies Logo"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                }}
              />
            </span>
            Front End Developer / AWS Cloud Specialist
          </h3>
          <p
            style={{
              fontWeight: "bold",
              color: "#007bff",
              margin: "5px 0",
              fontSize: "14px",
            }}
          >
            Hexaware Technologies
          </p>
          <p
            style={{
              color: "#666",
              margin: "5px 0 15px 0",
              fontSize: "12px",
              fontStyle: "italic",
            }}
          >
            May 2023 – Present
          </p>
          <ul
            style={{
              paddingLeft: "20px",
              marginBottom: "20px",
            }}
          >
            <li
              style={{
                marginBottom: "8px",
                fontSize: "13px",
                lineHeight: "1.5",
                color: "#444",
              }}
            >
              Developed internal website using NodeJS, EJS, JavaScript, Express,
              and REST APIs.
            </li>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "13px",
                lineHeight: "1.5",
                color: "#444",
              }}
            >
              Converted JSON data into tables, graphs, and charts across 5
              successful releases.
            </li>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "13px",
                lineHeight: "1.5",
                color: "#444",
              }}
            >
              Tested and deployed code via Jenkins pipeline to production.
            </li>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "13px",
                lineHeight: "1.5",
                color: "#444",
              }}
            >
              Monitored AWS assets and ensured encryption for SNS, SQS,
              DynamoDB, and Kinesis.
            </li>
            <li
              style={{
                marginBottom: "8px",
                fontSize: "13px",
                lineHeight: "1.5",
                color: "#444",
              }}
            >
              Oversaw onboarding and cloud transition for 20+ on-prem assets.
            </li>
          </ul>

          <h3>
            <span>
              <img
                src={GensparkI}
                alt="Genspark Logo"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                }}
              />
            </span>
            Java Software Engineer
          </h3>
          <p
            style={{
              fontWeight: "bold",
              color: "#007bff",
              margin: "5px 0",
              fontSize: "14px",
            }}
          >
            GenSpark
          </p>
          <p
            style={{
              color: "#666",
              margin: "5px 0 15px 0",
              fontSize: "12px",
              fontStyle: "italic",
            }}
          >
            Feb 2022 – Jun 2023
          </p>
          <ul>
            <li>
              Developed UI features for internal website as a vendor for
              Hexaware.
            </li>
            <li>
              Built dynamic reporting tools, search functionality, and SQL
              update templates.
            </li>
          </ul>

          <h3>
            {" "}
            <span>
              <img
                src={ConcentrixI}
                alt="Hexaware Technologies Logo"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                }}
              />
            </span>
            Senior Operations Manager
          </h3>
          <p
            style={{
              fontWeight: "bold",
              color: "#007bff",
              margin: "5px 0",
              fontSize: "14px",
            }}
          >
            Concentrix
          </p>
          <p
            style={{
              color: "#666",
              margin: "5px 0 15px 0",
              fontSize: "12px",
              fontStyle: "italic",
            }}
          >
            Feb 2014 – Jul 2020
          </p>
          <ul>
            <li>Supported partnerships with GM, Facebook, and Apple.</li>
            <li>
              Onboarded 350 employees for Apple’s remote support during
              COVID-19.
            </li>
            <li>Achieved 1% attrition rate for GM team.</li>
            <li>
              Expanded Facebook partnership to include Ads Fraud analytics.
            </li>
          </ul>

          <h3>
            <span>
              <img
                src={IBMI}
                alt="Hexaware Technologies Logo"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                }}
              />
            </span>
            Business Process Manager
          </h3>
          <p
            style={{
              fontWeight: "bold",
              color: "#007bff",
              margin: "5px 0",
              fontSize: "14px",
            }}
          >
            IBM
          </p>
          <p
            style={{
              color: "#666",
              margin: "5px 0 15px 0",
              fontSize: "12px",
              fontStyle: "italic",
            }}
          >
            Jan 2006 – Jul 2013
          </p>
          <ul>
            <li>
              Led strategic planning and client presentations for GM legal
              operations.
            </li>
            <li>Achieved 90% arbitration win rate (vs. 85% goal).</li>
            <li>Hosted legal seminars and earned 8 client awards.</li>
          </ul>

          <h3>
            {" "}
            <span>
              <img
                src={SitelI}
                alt="Hexaware Technologies Logo"
                style={{
                  width: "25px",
                  height: "25px",
                  marginRight: "10px",
                }}
              />
            </span>
            Quality Specialist / Operations Manager
          </h3>
          <p
            style={{
              fontWeight: "bold",
              color: "#007bff",
              margin: "5px 0",
              fontSize: "14px",
            }}
          >
            Sitel Group
          </p>
          <p
            style={{
              color: "#666",
              margin: "5px 0 15px 0",
              fontSize: "12px",
              fontStyle: "italic",
            }}
          >
            1997 – 2005
          </p>
        </div>

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #007bff",
              paddingBottom: "5px",
              fontSize: "20px",
              marginBottom: "15px",
            }}
          >
            Education
          </h2>
          <ul style={{ listStyle: "none" }}>
            <li>
              <span>
                <img
                  src={UTI}
                  alt="Hexaware Technologies Logo"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "10px",
                  }}
                />
              </span>
              <strong>UT Austin – Center for Professional Education</strong>,
              Certificate in Full Stack Web Development (2020–2021)
            </li>
            <li>
              {" "}
              <span>
                <img
                  src={UOPI}
                  alt="Hexaware Technologies Logo"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "10px",
                  }}
                />
              </span>
              <strong>University of Phoenix</strong>, BS in Business
              Administration (2009–2011)
            </li>
            <li>
              {" "}
              <span>
                <img
                  src={TTUI}
                  alt="Hexaware Technologies Logo"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginRight: "10px",
                  }}
                />
              </span>
              <strong>Texas Tech University</strong>, Business Administration
              and Management (1994–1999)
            </li>
          </ul>
        </div>

        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              color: "#333",
              borderBottom: "2px solid #007bff",
              paddingBottom: "5px",
              fontSize: "20px",
              marginBottom: "15px",
            }}
          >
            Skills
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {[
              "Angular",
              "JavaScript",
              "React.js",
              "HTML5",
              "EJS",
              "Node.js",
              "Express.js",
              "REST APIs",
              "SQL",
              "CSS",
            ].map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  border: "1px solid #ddd",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

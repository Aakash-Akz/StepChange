import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../assets/Images/SPlogo.png";
import logo1 from "../assets/Images/VItas Nexus Logo-023.png";

const Index = () => {
  return (
    <>
      <header>
        <div className="nav">
          <center>
            <img src={logo} alt="SPlogo" />
          </center>
        </div>
      </header>
      <main>
        <div className="tagline">
          <p>Interested in Collaboration with Step Change?</p>
        </div>
        <center>
          <div className="clickables">
            <Link to={"/form1"} style={{ textDecoration: "none" }}>
              <div className="collab1">
                <a href="form1.html">Collaborate Now!</a>
              </div>
            </Link>
            <Link to={"/form2"} style={{ textDecoration: "none" }}>
              <div className="collab2">
                <a href="form2.html">Collaborate in Future!</a>
              </div>
            </Link>
            <Link to={"/form3"} style={{ textDecoration: "none" }}>
              <div className="explore">
                <a href="form3.html">Know more about us!</a>
              </div>
            </Link>
          </div>
        </center>
      </main>
      <footer>
        <div className="back">
          {/* <p className="p1">Thanks for your valuable feedback</p> */}
          <div className="vitae">
            <p style={{ marginRight: "3px" }} className="p2">
              {" "}
              {"in collaboration with" + " "}
            </p>
            <img src={logo1} alt="" />
            <p className="p2">
              | &#9993;{" "}
              <a
                style={{ textDecoration: "none", color: "#000" }}
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vitae.nexus@gmail.com"
              >
                vitae.nexus@gmail.com
              </a>{" "}
              | &#9743;{" "}
              <a
                style={{ textDecoration: "none", color: "#000" }}
                href="tel:+919986903790"
              >
                Phone: +919986903790
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;

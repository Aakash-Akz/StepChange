import "./style.css";
import logo from "../assets/Images/SPlogo.png";
import logo1 from "../assets/Images/VItas Nexus Logo-023.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Thanks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

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
        <p className="thanks">Thank you for your valuable response!</p>
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

export default Thanks;

import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import logo from "../assets/Images/SPlogo.png";
import logo1 from "../assets/Images/VItas Nexus Logo-023.png";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "https://step-change.vercel.app/api/form2",
        data
      );
      console.log(res.data);
      toast.success("Response Submitted Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Response not Submitted ");
    }
    setTimeout(() => {
      navigate("/thankyoupage");
    }, 1000);
  };

  const handleClear = () => {
    setData({
      name: "",
      email: "",
      phoneNumber: "",
      companyName: "",
    });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

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
        <div className="container-form2">
          <div className="wrapper">
            <div className="form-box info">
              <form onSubmit={handleSubmit} method="POST">
                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="person"></ion-icon>
                  </span>
                  <input
                    type="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    id="name"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="mail"></ion-icon>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    id="email"
                    required
                  />
                  <label>Email</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="call"></ion-icon>
                  </span>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={data.phoneNumber}
                    onChange={handleChange}
                    id="phone"
                    required
                  />
                  <label>Phone Number</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="location"></ion-icon>
                  </span>
                  <input
                    type="company"
                    name="companyName"
                    value={data.companyName}
                    onChange={handleChange}
                    id="company"
                    required
                  />
                  <label>Company Name</label>
                </div>

                <div className="btn">
                  <button type="submit">Submit</button>
                  <button type="clear" onClick={handleClear}>
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
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

export default Form2;

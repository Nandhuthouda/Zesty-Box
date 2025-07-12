import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../assets/constants";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  // useEffect(() => {
  //   console.log("Header rendered");
  // }, [btn]);

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="hello" />
      </div>

      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutbox">About box</Link>
          </li>
          <li>
            <Link to="/">Contact Box</Link>
          </li>
          <li>
            {/* <Link to="/">Box</Link> */}
            cart
          </li>
          
          <li>
            <button
              className="Login"
              onClick={() => {
                setBtn((pre) => (pre === "Login" ? "Logout" : "Login"));
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

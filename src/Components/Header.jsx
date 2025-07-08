import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../assets/constants";
// import {useEffect} from "react";

const Header = () => {
  // let btn = "Login";

  const [btn, setBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt="hello" />
        
      </div>

      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About box</li>
          <li>Sign In</li>
          <li>Cart</li>
          <li>
            <button className="Login"
              onClick={() => {
                setBtn((pre)=>(pre==="Login"?"Logout":"Login"));
                 
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>

    // data:image/png;base64,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
    // <img src="https://www.shutterstock.com/image-vector/cartoon-burger-icon-vector-illustration-260nw-2446302255.jpg" alt=""/>
  );
};

export default Header;

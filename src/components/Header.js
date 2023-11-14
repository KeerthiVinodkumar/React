import {  useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
const Header = () => {
  const [button, setbutton] = useState("login");

  return (
    <div className="res_Header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="res_items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">AboutUs</Link></li>
          <li><Link to="/contact" >contactUs</Link></li>
          <li>Cart</li>
          <button
            className="login_btn"
            onClick={() => {
              button === "login" ? setbutton("logout") : setbutton("login");
            }}
          >
            {button}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;

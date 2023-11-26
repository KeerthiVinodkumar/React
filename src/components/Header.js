import {  useEffect, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOlineStatus";

const Header = () => {
 
  const [button, setbutton] = useState("login");
 

  const onlinestatus = useOnlineStatus()
  return (
    <div className="flex">
      <div className="w-36">
        <img src={LOGO_URL}></img>
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4"  >
          <li>Onlinestatus:{onlinestatus? "✔":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">AboutUs</Link></li>
          <li><Link to="/contact" >contactUs</Link></li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
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

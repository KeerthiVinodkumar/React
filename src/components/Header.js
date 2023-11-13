import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
const Header = () => {
  const [button, setbutton] = useState("login");
  console.log("rerendered");
  return (
    <div className="res_Header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="res_items">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>contactUs</li>
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

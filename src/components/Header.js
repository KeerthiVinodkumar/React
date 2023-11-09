import { LOGO_URL } from "../utils/contants";
const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };
  export default Header
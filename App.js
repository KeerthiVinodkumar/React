import React from "react";
import ReactDOM from "react-dom/client";

// Header
// -Logo
// -logo items
// Body
// -Search bar
// -cards
//    -Ratings
//     -cuisines

const Applist = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const Header = () => {
  return (
    <div className="res_Header">
      <div className="logo">
        <img src="https://static.vecteezy.com/system/resources/previews/008/687/818/original/food-delivery-logo-free-vector.jpg"></img>
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
const ReastaurantCard = () => {
  return (
    <div className="res_card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p0d9zl2iw9ovjqnwinq4"></img>
      <h2>Naidu Hotal </h2>
      <h6>Rating-4.2</h6>
      <h5>Souch Indian Home Food Anantapur</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="res_body">
      <div className="search_bar">
        <button>serach</button>
      </div>
      <div className="restourant_Cards">
        <ReastaurantCard />
        <ReastaurantCard />
        <ReastaurantCard />
        <ReastaurantCard />
        <ReastaurantCard />
        <ReastaurantCard />
        <ReastaurantCard />
        <ReastaurantCard />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applist />);

// const Title =()=>{
//  return <div>
//     <h1>this is Title componenht</h1>

//   </div>
// };
// const number = 100
// const Heading3 = () => {
//   return (
//     <div id="container">

//       <h1>hi this is functional component</h1>
//       <h2>this is another functional component</h2>
//       <Title/>
//     </div>
//   );
// };
// root.render(<Heading3/>);

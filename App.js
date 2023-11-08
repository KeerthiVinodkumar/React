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
const ReastaurantCard = (props) => {
  const {resdata} = props
  const {name,avgRatingString,cuisines,costForTwo}=resdata.restaurants.info
 

  return (
    <div className="res_card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata.restaurants.info.cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h6>{avgRatingString}</h6>
      <h5>{cuisines.join(',')}</h5>
      <h5> {costForTwo}</h5>
    </div>
  );
};
 
// const res_obj=[
  // {
  // restaurants: 
  // {
  //     info: {
  //       id: "785060",
  //       name: "MR.SWAWARMA MINI RESTAURANT",
  //       cloudinaryImageId: "46c6442ca72c545693cc2e0fcfa1aa0b",
  //       locality: "Adimurthy Nagar",
  //       areaName: "Adimurthy Nagar",
  //       costForTwo: "₹250 for two",
  //       cuisines: [
  //         "Arabian",
  //         "Snacks"
  //       ],
  //       feeDetails: {
  //         restaurantId: "785060",
  //         fees: [
  //           {
  //             name: "BASE_DISTANCE",
  //             fee: 1000
  //           },
  //           {
  //             name: "BASE_TIME"
  //           },
  //           {
  //             name: "ANCILLARY_SURGE_FEE"
  //           }
  //         ],
  //         totalFee: 1000
  //       },
  //       parentId: "466955",
  //       avgRatingString: "NEW",
  //       promoted: true,
  //       adTrackingId: "cid=9338003~p=1~eid=0000018b-aea6-d5ae-20d4-0b5900d30166~srvts=1699442251182~45995",
  //       sla: {
  //         deliveryTime: 19,
  //         lastMileTravel: 1.1,
  //         serviceability: "SERVICEABLE",
  //         slaString: "19 mins",
  //         lastMileTravelString: "1.1 km",
  //         iconType: "ICON_TYPE_EMPTY"
  //       },
  //       availability: {
  //         nextCloseTime: "2023-11-08 22:00:00",
  //         opened: true
  //       },
  //       badges: {
          
  //       },
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           textBased: {
              
  //           },
  //           imageBased: {
              
  //           },
  //           textExtendedBadges: {
              
  //           }
  //         }
  //       },
  //       loyaltyDiscoverPresentationInfo: {
  //         badgeType: "BADGE_TYPE_OFFER_PACK",
  //         offerSubText: "with offer pack",
  //         nonSwiggyOneFreedelMessage: "FREE DELIVERY"
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {
              
  //           },
  //           video: {
              
  //           }
  //         }
  //       },
  //       reviewsSummary: {
          
  //       },
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       isNewlyOnboarded: true,
  //       restaurantOfferPresentationInfo: {
          
  //       }
  //     },
  //     analytics: {
        
  //     },
  //     cta: {
  //       link: "swiggy://menu?restaurant_id=785060",
  //       text: "RESTAURANT_MENU",
  //       type: "DEEPLINK"
  //     },
  //   },
      
     
  //     info: {
  //       id: "413090",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "s2qt7eqtinbc95telugg",
  //       locality: "Town Mall",
  //       areaName: "Anantapur",
  //       costForTwo: "₹400 for two",
  //       cuisines: [
  //         "Pizzas",
  //         "Italian",
  //         "Pastas",
  //         "Desserts"
  //       ],
  //       avgRating: 3.6,
  //       feeDetails: {
  //         restaurantId: "413090",
  //         fees: [
  //           {
  //             name: "BASE_DISTANCE",
  //             fee: 1000
  //           },
  //           {
  //             name: "BASE_TIME"
  //           },
  //           {
  //             name: "ANCILLARY_SURGE_FEE"
  //           }
  //         ],
  //         totalFee: 1000
  //       },
  //       parentId: "2456",
  //       avgRatingString: "3.6",
  //       totalRatingsString: "500+",
  //       sla: {
  //         deliveryTime: 25,
  //         serviceability: "SERVICEABLE",
  //         slaString: "25 mins",
  //         iconType: "ICON_TYPE_EMPTY"
  //       },
  //       availability: {
  //         nextCloseTime: "2023-11-08 23:59:00",
  //         opened: true
  //       },
  //       badges: {
          
  //       },
  //       isOpen: true,
  //       type: "F",
  //       badgesV2: {
  //         entityBadges: {
  //           imageBased: {
              
  //           },
  //           textExtendedBadges: {
              
  //           },
  //           textBased: {
              
  //           }
  //         }
  //       },
  //       aggregatedDiscountInfoV3: {
  //         header: "20% OFF",
  //         subHeader: "UPTO ₹50"
  //       },
  //       differentiatedUi: {
  //         displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //         differentiatedUiMediaDetails: {
  //           mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //           lottie: {
              
  //           },
  //           video: {
              
  //           }
  //         }
  //       },
  //       reviewsSummary: {
          
  //       },
  //       displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //       restaurantOfferPresentationInfo: {
          
  //       }
  //     },
  //     analytics: {
        
  //     },
  //     cta: {
  //       link: "swiggy://menu?restaurant_id=413090",
  //       text: "RESTAURANT_MENU",
  //       type: "DEEPLINK"
  //     }
    
  
  // ]

const resList=[
  {
restaurants: 
 {
    info: {
      id: "785060",
      name: "MR.SWAWARMA MINI RESTAURANT",
      cloudinaryImageId: "46c6442ca72c545693cc2e0fcfa1aa0b",
      locality: "Adimurthy Nagar",
      areaName: "Adimurthy Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Arabian",
        "Snacks"
      ],
    }
  }},
  {
    restaurants: 
     {
        info: {
          id: "750070",
          name: "CakeZone",
          cloudinaryImageId: "bbbeb027d65d881c3107b1b0c97ba1f5",
          locality: "OLD TOWN",
          areaName: "SANGAMESH NAGAR",
          costForTwo: "₹200 for two",
          cuisines: [
            "Bakery",
            "Desserts",
            "Beverages",
            "Ice Cream",
            "Sweets",
            "Juices",
            "Bengali"
          ],
        }
      }}

]

    

const Body = () => {
  return (
    <div className="res_body">
      <div className="search_bar">
        <button>serach</button>
      </div>
      <div className="restourant_Cards">
        <ReastaurantCard resdata={resList[0]}/>
        <ReastaurantCard resdata={resList[1]}/>
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

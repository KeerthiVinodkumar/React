import React from "react";
import ReactDOM from "react-dom/client";

// Header
//  -Logo
//  -logo items
// Body
//  -Search bar
// -cards
//    -Ratings
//    -cuisines
//    -cost for two

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
  const { resdata } = props;
  const { name, avgRatingString, cuisines, costForTwo } =
    resdata.restaurants.info;

  return (
    <div className="res_card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resdata.restaurants.info.cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h6>{avgRatingString}</h6>
      <h5>{cuisines.join(",")}</h5>
      <h5> {costForTwo}</h5>
    </div>
  );
};

const resList = [
  {
    restaurants: {
      info: {
        id: "785060",
        name: "MR.SWAWARMA MINI RESTAURANT",
        cloudinaryImageId: "46c6442ca72c545693cc2e0fcfa1aa0b",
        locality: "Adimurthy Nagar",
        areaName: "Adimurthy Nagar",
        costForTwo: "₹250 for two",
        cuisines: ["Arabian", "Snacks"],
        feeDetails: {
          restaurantId: "785060",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "466955",
        avgRatingString: "NEW",
        promoted: true,
        adTrackingId:
          "cid=9338003~p=1~eid=0000018b-aea6-d5ae-20d4-0b5900d30166~srvts=1699442251182~45995",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=785060",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "413090",
        name: "Domino's Pizza",
        cloudinaryImageId: "s2qt7eqtinbc95telugg",
        locality: "Town Mall",
        areaName: "Anantapur",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 3.6,
        feeDetails: {
          restaurantId: "413090",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "2456",
        avgRatingString: "3.6",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 25,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=413090",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
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
          "Bengali",
        ],
        avgRating: 3.7,
        feeDetails: {
          restaurantId: "750070",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "7003",
        avgRatingString: "3.7",
        totalRatingsString: "50+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "20 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=750070",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "385795",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        locality: "Anantpur",
        areaName: "Anantapur",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "385795",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 2900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 2900,
        },
        parentId: "547",
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 8.3,
          serviceability: "SERVICEABLE",
          slaString: "30 mins",
          lastMileTravelString: "8.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=385795",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "102792",
        name: "Biryani zone",
        cloudinaryImageId: "z2evtb83d3dirrurwik4",
        locality: "kamala Nagar",
        areaName: "Anantapur",
        costForTwo: "₹350 for two",
        cuisines: [
          "Biryani",
          "South Indian",
          "North Indian",
          "Chinese",
          "Indian",
          "Andhra",
        ],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "102792",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "47048",
        avgRatingString: "3.8",
        totalRatingsString: "10K+",
        promoted: true,
        adTrackingId:
          "cid=9290587~p=2~eid=0000018b-aea6-d5ae-20d4-0b5a00d30260~srvts=1699442251182~45995",
        sla: {
          deliveryTime: 11,
          lastMileTravel: 0.4,
          serviceability: "SERVICEABLE",
          slaString: "11 mins",
          lastMileTravelString: "0.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 22:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=102792",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "408183",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Pallavi towers",
        areaName: "Anantapur",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "408183",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "721",
        avgRatingString: "3.8",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 0.8,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "0.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=408183",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "304791",
        name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
        cloudinaryImageId: "idojilsforkdjuyzgpjh",
        locality: "Tata Nagar",
        areaName: "Anantapur",
        costForTwo: "₹300 for two",
        cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
        avgRating: 4.2,
        veg: true,
        feeDetails: {
          restaurantId: "304791",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "582",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 14,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "14 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 21:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=304791",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "457229",
        name: "NIC Ice Creams",
        cloudinaryImageId: "c8b98c4064dc2fd6bdf350212e5f0bd5",
        locality: "Lal band street",
        areaName: "Anantapur",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.3,
        veg: true,
        feeDetails: {
          restaurantId: "457229",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "6249",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 14,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "14 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=457229",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "303252",
        name: "The Vintage",
        cloudinaryImageId: "kvvzxqkkzvskjn04saaj",
        locality: "Srinagar Colony",
        areaName: "Anantapur",
        costForTwo: "₹250 for two",
        cuisines: [
          "Continental",
          "Pizzas",
          "Burgers",
          "Biryani",
          "South Indian",
          "North Indian",
          "Chinese",
          "Pastas",
          "Ice Cream",
        ],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "303252",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1500,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1500,
        },
        parentId: "215205",
        avgRatingString: "3.9",
        totalRatingsString: "5K+",
        promoted: true,
        adTrackingId:
          "cid=9290981~p=3~eid=0000018b-aea6-d5ae-20d4-0b5b00d3034b~srvts=1699442251182~45995",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 4.1,
          serviceability: "SERVICEABLE",
          slaString: "29 mins",
          lastMileTravelString: "4.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 23:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=303252",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "586797",
        name: "The Pizza Bakery",
        cloudinaryImageId: "t1cap1dgnqwhhhxisayr",
        locality: "Sai Nagar",
        areaName: "Anantapur",
        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Beverages", "Juices"],
        veg: true,
        feeDetails: {
          restaurantId: "586797",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "11108",
        avgRatingString: "--",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 21:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=586797",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "123495",
        name: "Lassi Shop",
        cloudinaryImageId: "reilwwo2falouzzial4d",
        locality: "Kamalanagar",
        areaName: "RF Road",
        costForTwo: "₹80 for two",
        cuisines: ["Juices"],
        avgRating: 4,
        veg: true,
        feeDetails: {
          restaurantId: "123495",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "587",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 13,
          lastMileTravel: 0.3,
          serviceability: "SERVICEABLE",
          slaString: "13 mins",
          lastMileTravelString: "0.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {},
            textBased: {},
          },
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=123495",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "102796",
        name: "Ruchi's family restaurant",
        cloudinaryImageId: "bte4uz7xp4jybskyvdav",
        locality: "Subash Road",
        areaName: "Anantapur",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Tandoor",
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Desserts",
        ],
        avgRating: 4,
        feeDetails: {
          restaurantId: "102796",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 900,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 900,
        },
        parentId: "172995",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 13,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "13 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 22:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹120 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=102796",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "337967",
        name: "Chennur Dum Biryani",
        cloudinaryImageId: "cpy778ay8d9xmyrephok",
        locality: "Saptha Giri Circle",
        areaName: "Anantapur",
        costForTwo: "₹400 for two",
        cuisines: ["Biryani"],
        avgRating: 3.6,
        feeDetails: {
          restaurantId: "337967",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "59938",
        avgRatingString: "3.6",
        totalRatingsString: "1K+",
        promoted: true,
        adTrackingId:
          "cid=9291026~p=4~eid=0000018b-aea6-d5ae-20d4-0b5c00d30442~srvts=1699442251182~45995",
        sla: {
          deliveryTime: 11,
          lastMileTravel: 0.4,
          serviceability: "SERVICEABLE",
          slaString: "11 mins",
          lastMileTravelString: "0.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 23:51:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=337967",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
  {
    restaurants: {
      info: {
        id: "101861",
        name: "Hotel indira priya Darshini",
        cloudinaryImageId: "rft1wvdgzybiufosmmtx",
        locality: "kamala Nagar",
        areaName: "Anantapur",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian"],
        avgRating: 3.7,
        veg: true,
        feeDetails: {
          restaurantId: "101861",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 1000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 1000,
        },
        parentId: "99389",
        avgRatingString: "3.7",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 13,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "13 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-08 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        loyaltyDiscoverPresentationInfo: {
          badgeType: "BADGE_TYPE_OFFER_PACK",
          offerSubText: "with offer pack",
          nonSwiggyOneFreedelMessage: "FREE DELIVERY",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=101861",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  },
];

const Body = () => {
  return (
    <div className="res_body">
      <div className="search_bar">
        <button>serach</button>
      </div>
      <div className="restourant_Cards">
        {resList.map((restaurant) => (
          <ReastaurantCard
            key={restaurant.restaurants.info.id}
            resdata={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applist />);


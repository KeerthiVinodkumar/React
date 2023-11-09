import { CDN_URL } from "../utils/contants";

const ReastaurantCard = (props) => {
    const { resdata } = props;
    const { name, avgRatingString, cuisines, costForTwo } =
      resdata.restaurants.info;
  
    return (
      <div className="res_card">
        <img
          src={
            CDN_URL+
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



  export default ReastaurantCard
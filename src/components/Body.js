import { useState } from "react";
import ReastaurantCard from "./Reastaurantcard";
import resList from "../utils/mockData";

const Body = () => {
  const [listedItems, setlistedItems] = useState(resList);
  return (
    <div className="res_body">
      <div className="search_bar">
        <button className="filter_btn"
          onClick={() => {
            const filterdlist = listedItems.filter(
              (res) => res.restaurants.info.avgRatingString > 4
            );
            setlistedItems(filterdlist);
          }}
        >
          TopRatedRestaurants
        </button>
      </div>
      <div className="restourant_Cards">
        {listedItems.map((listedItems) => (
          <ReastaurantCard
            key={listedItems.restaurants.info.id}
            resdata={listedItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

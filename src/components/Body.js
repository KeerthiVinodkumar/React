import ReastaurantCard from "./Reastaurantcard";
import resList from "../utils/mockData";

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

export default Body;

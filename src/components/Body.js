import { useEffect, useState } from "react";
import ReastaurantCard from "./Reastaurantcard";

const Body = () => {
  const [listedItems, setlistedItems] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async() => {
    const data =await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=14.678709664474182&lng=77.58391968905926"
    );
    const json=await data.json()
    console.log(json);
   const items = json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants.map(restaurant => restaurant) || [];
   setlistedItems(items)
   console.log(items);
  };

  console.log("body rendered");
  return (
    <div className="res_body">
      <div className="search_bar">
        <button
          className="filter_btn"
          onClick={() => {
            const filterdlist = listedItems.filter(
              (res) => res.restaurants.avgRatingString > 4
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
            key={listedItems.id}
            resdata={listedItems}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

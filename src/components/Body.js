import { useEffect, useState } from "react";
import ReastaurantCard from "./Reastaurantcard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listedItems, setlistedItems] = useState([]);
  const [filteredItems, setfilteredItems] = useState([]);
  const [search, setsearch] = useState("");
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=14.678709664474182&lng=77.58391968905926"
    );
    const json = await data.json();
    console.log(json);
    const items =
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.map(
        (restaurant) => restaurant
      );
    setlistedItems(items);
    // console.log(items);
    setfilteredItems(items);
    
  };
  // Conditional Rendaring
  //  if(listedItems.length===0){
  //   return <Shimmer/>
  //  }
  return listedItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res_body">
      <div className="search_bar">
        <input
          type="text"
          className="search_box"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button
          onClick={
            // filter the restarent card and update the ui
            // search text
            () => {
              console.log(search);
              const filteredrestaurent = listedItems.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setfilteredItems(filteredrestaurent);
            }
          }
        >
          search
        </button>
        <button
          className="filter_btn"
          onClick={() => {
            const filterdlist = listedItems.filter(
              (res) => res.info.avgRatingString > 4
            );
            setfilteredItems(filterdlist);
          }}
        >
          TopRatedRestaurants
        </button>
      </div>
      <div className="restourant_Cards">
        {filteredItems.map((listedItems) => (
          <ReastaurantCard key={listedItems.id} resdata={listedItems} />
        ))}
      </div>
    </div>
  );
};

export default Body;

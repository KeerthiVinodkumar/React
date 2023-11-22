import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useReataurantMenu";
const RestaurantMenu = () => {
  const [vegOnlyMenu, setVegOnlyMenu] = useState([]);
  const { resID } = useParams();
  const resinfo = useRestaurantMenu(resID);

  if (resinfo === null) return <Shimmer />;
  const { name, cuisines, areaName } = resinfo?.cards[0]?.card?.card?.info;
  // const menuCards = resinfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
  // console.log(menuCards)
  const { cards } = resinfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR || {};
  console.log("cards", cards);
  const { itemCards } = cards?.[1]?.card?.card || {};
  //  setvegOnly(itemCards)
  console.log("itemcards", itemCards);

  const handleButtonClick = () => {
    // Filter the menu and update the state

    if (vegOnlyMenu.length > 0) {
      setVegOnlyMenu([]);
    } else {
      const filteredMenu = itemCards.filter(
        (res) => res.card.info.itemAttribute.vegClassifier === "VEG"
      );

      setVegOnlyMenu(filteredMenu);
    }
    // Log the filtered menu to the console
    // console.log("vegonly", filteredMenu);
  };
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{areaName}</p>

      <button onClick={handleButtonClick}>
        {vegOnlyMenu.length > 0 ? "show all list" : "Fetch Veg-Only Menu"}
      </button>
      {vegOnlyMenu.length > 0 ? (
        <ul>
          {vegOnlyMenu.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      ) : (
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default RestaurantMenu;

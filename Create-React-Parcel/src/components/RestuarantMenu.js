import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestuarantMenu = () => {
  // To access the dynamic segment's param
  const { resid } = useParams();

  const [restuarant, setRestuarant] = useState(null);

  useEffect(() => {
    getRestuarants();
  }, []);

  async function getRestuarants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId="
    + resid);
    const json = await data.json();
    setRestuarant(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    console.log(json?.data.cards[2].card?.card?.info?.id);
  }

  return !restuarant ? (
    <Shimmer />
  ) : (
    <div>
      <h2>Menu</h2>
      <ul>
        {restuarant.map((i) => {
          console.log(i.card.info);
          return (
            <li key={i?.card?.info?.id}>{i?.card?.info?.name + " - " + (i?.card?.info?.price)/100}</li>
          )
        })}
      </ul>
    </div>
  );

  return <div></div>;
};

export default RestuarantMenu;

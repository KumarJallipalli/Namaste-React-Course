import RestuarantCard from "./RestuarantCard";
import { restuarantList } from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, allRestuarants) {
  return allRestuarants.filter((i) =>
    i.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}


// Body Component
const Body = () => {
  const [searchText, setSearchText] = useState("");

  // Creating a state variable for filtering the data
  const [allRestuarants, setAllRestuarants] = useState([]); // here we used empty array, so to use in conditional rendering
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  // useEffect()
  useEffect(() => {
    getRestuarants();
  }, []);

  // API call [for restuarants list]
  async function getRestuarants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();

    // Make sure to do Optional Chaining
    setAllRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // If this is NOT set, then we will be only shown empty data, since filtered data by default is empty
    setFilteredRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // Component is NOT rendered [Early Return]
  if (!allRestuarants) return null;

  // Conditional Rendering
  return allRestuarants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* // Search Functionality */}
      <div>
        <input
          type="text"
          placeholder="Search.."
          value={searchText}

          // Changing the State Varible
          onChange={(e) => {
            // e.target.value -> refers to whatever we write in the search box
            setSearchText(e.target.value);
          }}
        />
        &nbsp;
        <button
          onClick={() => {
            // Filtering the data when clicked
            let data = filterData(searchText, allRestuarants);

            // updating the data
            setFilteredRestuarants(data);
          }}
        >
          Search
        </button>
      </div>

      {/* // List of Restuarant Cards */}
      <div className="restuarantList">
        {/* {Code for "No Restuarant Found" case} */}
        {filteredRestuarants.length === 0 ? (
          <h2>No Results Found...</h2>
        ) : (
          filteredRestuarants.map((i) => {
            return <Link to={"/restuarant/" + i.info.id} key={i.info.id}><RestuarantCard {...i.info} /></Link>;
          })
        )}
      </div>
    </>
  );
};

export default Body;

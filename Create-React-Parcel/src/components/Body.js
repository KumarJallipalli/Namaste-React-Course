import RestuarantCard from "./RestuarantCard";
import { restuarantList } from "../constants";
import { useState } from "react";

function filterData(searchText, restuarants) {
  return restuarants.filter( (i) => i.data.name.includes(searchText) )
}

// Body Component
const Body = () => {
  //   // 1. This is Local JS Variable
  //   const searchTxt = "KFC";

  /**
   *    2. This is React State Varible created using useState() Hook
   *        - It will have 1 -> Name of varaible && 2. -> A fn to change/update the variable
   *        - React doesn't allow us to directly change the Sate Varibles,
   *        - It provides us with functions to change the variable [ UseState itself provides the fn ]
   */
  const [searchText, setSearchText] = useState("");

  // Creating a state variable for filtering the data
  const [restuarants, setRestuarants] = useState(restuarantList);

  return (
    <>
      {/* // Search Functionality */}
      <div>
        <input
          type="text"
          placeholder="Search.."
          value={searchText}
          //   // This is to change the value of input field, But still doesn't work with the below code as well
          //   // Because Local variable are NOT maintained in React, We Use so called React Variables
          //   onChange={(e) => {
          //     searchTxt = e.target.value;
          //   }}

          // Changing the State Varible
          onChange={(e) => {
            // e.target.value -> refers to whatever we write in the search box
            setSearchText(e.target.value);
          }}
        />
        <h2>{searchText}</h2>
        &nbsp;
        <button
        //   onClick={() => {
        //     // Filtering the data when clicked
        //     let data = filterData(searchText, restuarants);

        //     // updating the data 
        //     setRestuarants(data);
        //   }}

          onClick={() => {
            (searchText === "true") ? setSearchText("false"): setSearchText("true");
          }}
        >
          Search
        </button>
      </div>

      {/* // List of Restuarant Cards */}
      <div className="restuarantList">
        {/* Here, we need to use the (...) to send the data so that params can be destructed
                        But make sure that we are destructing the "restuarant.data", hence we passed like below
                        But, This will throw error "<RestuarantCard resturant = {...restuarantList[0].data}/>"  
                            Cuz, again we are passing a sible Object "restuarant", hence only 1st obj will receive this */}
        {/* <RestuarantCard {...restuarants[0].data} />
        <RestuarantCard {...restuarants[1].data} />
        <RestuarantCard {...restuarants[2].data} />
        <RestuarantCard {...restuarants[3].data} /> */}

        {/* {The above code can be optimised using maps, this is the actual methods of doing} */}
        {restuarants.map((i) => {
          return <RestuarantCard {...i.data} />;
        })}
      </div>
    </>
  );
};

export default Body;

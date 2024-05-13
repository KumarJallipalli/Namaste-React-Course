import RestuarantCard from "./RestuarantCard";
import { restuarantList } from "../constants";

// Body Component
const Body = () => (
    <div className="restuarantList">
        {/* Here, we need to use the (...) to send the data so that params can be destructed
            But make sure that we are destructing the "restuarant.data", hence we passed like below
            But, This will throw error "<RestuarantCard resturant = {...restuarantList[0].data}/>"  
                Cuz, again we are passing a sible Object "restuarant", hence only 1st obj will receive this */}
        <RestuarantCard {...restuarantList[0].data}/>
        <RestuarantCard {...restuarantList[1].data}/>
        <RestuarantCard {...restuarantList[2].data}/>
        <RestuarantCard {...restuarantList[3].data}/>

        {/* {The above code can be optimised using maps, this is the actual methods of doing} */}
        {restuarantList.map( (i) => {
            return <RestuarantCard {...i.data}/>
        } )}
    </div>
)

export default Body;
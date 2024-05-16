import { IMG_CDN_URL } from "../constants";

// Restuarant Card Component
const RestuarantCard = ( {name, cloudinaryImageId, cuisines, avgRating} ) => (
    // This below line of code is not working, as there was ambuigity with {}
    // { const {name, cloudinaryImageId, cuisines, avgRating } = restuarant.data }
    <div className="card">
        <img src={ IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{avgRating} &#9733; </h3>
        {/* {Since the cuisines data comes in the form of Array, we used join } */}
        <p>{cuisines.join(", ")}</p>
    </div>
)

export default RestuarantCard;
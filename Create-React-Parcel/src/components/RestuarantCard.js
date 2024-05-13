import { IMG_CDN_URL } from "../constants";

// Restuarant Card Component
const RestuarantCard = ( {name, mediaAssetsImgId, cuisine, rating} ) => (
    // This below line of code is not working, as there was ambuigity with {}
    // { const {name, mediaAssetsImgId, cuisine, rating } = restuarant.data }
    <div className="card">
        <img src={ IMG_CDN_URL + mediaAssetsImgId} />
        <h2>{name}</h2>
        <h3>{rating} &#9733; </h3>
        {/* {Since the cuisine data comes in the form of Array, we used join } */}
        <p>{cuisine.join(", ")}</p>
    </div>
)

export default RestuarantCard;
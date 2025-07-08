
import { CND_URL } from "../assets/constants";

const RestaurantCard = ({ restdata }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restdata.info;

  return (
    <div className="restCard">
      <div className="img">
        <img src={CND_URL + cloudinaryImageId} alt={name} />
      </div>
      <div className="companyName">{name}</div>
      <div className="recipeName">{cuisines?.join(", ")}</div>
      <div className="rating">⭐ {avgRating}</div>
      <div className="recipeName">{costForTwo}</div>
      <div className="recipeName">⏱ {sla?.slaString}</div>
    </div>
  );
};

export default RestaurantCard;














// import { CND_URL } from "../assets/constants";



// const RestaurantCard = ({restdata}) => {
//   const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = restdata.data.cards[0].gridElements.infoWithStyle.card.card.info;

//   return (
//     <div className="restCard">
//       <div className="img">
//         <img
//           src={CND_URL+cloudinaryImageId}
//           alt={name}
//         />
//       </div>
//       <div className="companyName">{name}</div>
//       <div className="recipeName">{cuisines?.join(", ")}</div>
//       <div className="rating">⭐ {avgRating} </div>
//       <div className="recipeName">{costForTwo}</div>
//       <div className="recipeName">⏱ {sla?.slaString}</div>
//     </div>
//   );
// };

// export default RestaurantCard

// // import React from "react";


// // export default FoodCard;


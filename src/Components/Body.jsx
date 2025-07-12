import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import RestraMenu from "./RestraMenu";



const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Fetch data on mount
  useEffect(() => {
    fetchRestaurants();
    // console.log("useEffect called");
  },[]);
  const fetchRestaurants = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );



      // console.log(response);
      const json = await response.json();
      // console.log(json);
      // Safe access to restaurants
      const restaurantList =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setAllRestaurants(restaurantList);
      setRestaurants(restaurantList);
        
      // console.log(restaurantList);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  return (
    <div className="body">
      <div className="top-body">
        <div className="search">
          <input
            className="search-bar"
            type="text"
            placeholder="Search for food items"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)
            }
          />
          <button className="search-bar" onClick={() => {
            const searchedList = allRestaurants.filter((res) => {
              if(res.info.name.toLowerCase().includes(searchText.toLowerCase())){
                return res;
              }
              
            });
            setRestaurants(searchedList);

            
             
          }}>
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filtered = allRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setRestaurants(filtered);
            }}
          >
            Top Rating
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              const vegOnly = allRestaurants.filter(
                (res) => res.info.veg === true
              );
              setRestaurants(vegOnly);
            }}
          >
            Veg
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              const nonVeg = allRestaurants.filter(
                (res) => res.info.veg === false
              );
              setRestaurants(nonVeg);
            }}
          >
            Non Veg
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              setRestaurants(allRestaurants); // reset
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="cards">
        {listOfRestaurants.length === 0 ? (
          <h3>Loading restaurants...</h3>
        ) : (
          //here we can also add shimmer UI (i.e conditional rendering)
          listOfRestaurants.map((rest) => (
            <RestaurantCard key={rest.info.id} restdata={rest} onClick={()=>{<RestraMenu/>}}/>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

























// import React, { useState, useEffect } from "react";
// import RestaurantCard from "./RestaurantCard";
// import mockRestaurants from "../assets/mockData"; // Renamed import to avoid naming conflict

// const Body = () => {
//   const [listOfRestaurants, setRestaurants] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch function
//   const fetchRestaurants = async () => {
//     try {
//       setLoading(true);
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );
//       const json = await data.json();

//       // Check if data exists in the API response
//       const restaurantData = json?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//       if (restaurantData) {
//         setRestaurants(restaurantData);
//       } else {
//         // Fallback to mock data if API doesn't return expected structure
//         console.warn("Using mock data as API response structure didn't match");
//         setRestaurants(mockRestaurants[0].data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
//       }
//     } catch (error) {
//       console.error("Error fetching restaurants:", error);
//       // Fallback to mock data on error
//       setRestaurants(mockRestaurants[0].data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // useEffect inside component
//   useEffect(() => {
//     fetchRestaurants();
//   }, []);

//   if (loading) {
//     return <div>Loading restaurants...</div>;
//   }

//   return (
//     <div className="body">
//       <div className="top-body">
//         <div className="filter">
//           <button
//             className="filter-btn"
//             onClick={() => {
//               const filteredRestaurants = listOfRestaurants.filter(
//                 (res) => res.info.avgRating > 4
//               );
//               setRestaurants(filteredRestaurants);
//             }}
//           >
//             Top Rating
//           </button>
//           <button
//             onClick={() => {
//               const vegRestaurants = listOfRestaurants.filter(
//                 (res) => res.info.veg === true
//               );
//               setRestaurants(vegRestaurants);
//             }}
//           >
//             Veg
//           </button>
//           <button
//             onClick={() => fetchRestaurants()} // Reset to all restaurants
//           >
//             Show All
//           </button>
//         </div>
//       </div>
//       <div className="cards">
//         {listOfRestaurants.map((rest) => (
//           <RestaurantCard key={rest.info.id} restdata={rest} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

// import React from "react";
// import { useState, useEffect } from "react";
// import RestaurantCard from "./RestaurantCard";
// // import restaurants from "../assets/mockData";
// import restaurants from "../assets/API";

// const Body = () => {
//   const [listOfRestaurants, setrestaurants] = useState(restaurants);

// //
//   return (
//     <div className="body">
//       <div className="top-body">
//         {/* <div >
//           <input className="search-bar" type="text" name="" id="" />
//         </div> */}
//         {/* <h3>Restaurants with online food delivery in Hyderabad
// </h3> */}

//         <div className="filter">
//           <button
//             className="filter-btn"
//             onClick={() => {
//               const filteredRestaurants = listOfRestaurants.filter(
//                 (res) => res.info.avgRating > 4
//               );
//               setrestaurants(filteredRestaurants);
//             }}
//           >
//             Top Rating
//           </button>
//           <button>
//             Veg
//           </button>
//           <button>
//             Non veg
//           </button>
//           <button>
//             Break fast
//           </button>
//           <button>
//             Lunch
//           </button>
//           <button>
//             Dinner
//           </button>
//         </div>

//       </div>
//       <div className="cards">
//         {listOfRestaurants.map((rest) => {
//           return <RestaurantCard key={rest.info.id} restdata={rest} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default Body;

//  useEffect(()=>{
//     fetch();
//   },[])

// const fetch = async()=>{
//   const data = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//   );

//   const json = await data.json();
//   console.log(json);
// };

// import React, { useState } from "react";
// import RestaurantCard from "./RestaurantCard";
// import restaurants from "../assets/API";

// const Body = () => {
//   const [allRestaurants] = useState(
//     restaurants.data.cards[0].card.card.gridElements.infoWithStyle.restaurants
//   );
//   const [listOfRestaurants, setRestaurants] = useState(allRestaurants);

//   return (
//     <div className="body">
//       <div className="top-body">
//         <div className="filter">
//           <button
//             className="filter-btn"
//             onClick={() => {
//               const filtered = allRestaurants.filter(
//                 (res) => res.info.avgRating > 4
//               );
//               setRestaurants(filtered);
//             }}
//           >
//             Top Rating
//           </button>

//           <button
//             className="filter-btn"
//             onClick={() => {
//               const vegOnly = allRestaurants.filter(
//                 (res) => res.info.veg === true
//               );
//               setRestaurants(vegOnly);
//             }}
//           >
//             Veg
//           </button>

//           <button
//             className="filter-btn"
//             onClick={() => {
//               const nonVeg = allRestaurants.filter(
//                 (res) => res.info.veg === false
//               );
//               setRestaurants(nonVeg);
//             }}
//           >
//             Non Veg
//           </button>

//           <button onClick={() => setRestaurants(allRestaurants)}>
//             Reset
//           </button>
//         </div>
//       </div>

//       <div className="cards">
//         {listOfRestaurants.map((rest) => (
//           <RestaurantCard key={rest.info.id} restdata={rest} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Body from "./Components/Body";

//body

// 20250104181907
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.546077&lng=78.4879809&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"



// setonMind(DATA.data.cards[0].card.card.gridElements.infoWithStyle.info);
// "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";
// DATA.data.cards[4].card.card.gridElements.infoWithStyle.restaurants




const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

export default App;


// import { useState } from 'react';
// import './App.css';

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="head">
//         <img src="IndianDish.jpg" alt="dish" />
//         <h2>foodiie <span>|</span></h2>
//         <img src="paperA.png" alt="Location" height="7px" width="7px" />
//       </div>
//       <div className="cart">
//         <input
//           style={{ height: '43px', width: '400px' }}
//           type="text"
//           placeholder="taste me.."
//         />
//         <img src="cartt.png" alt="Cart" />
//       </div>
//     </div>
//   );
// };

// const ImageSlider = () => {
//   const images = [
//     "item.avif", "item1.avif", "item2.avif", "item3.avif", "item4.avif", "item5.avif", "item6.avif", "item7.avif", "item8.avif",
//     "item.avif", "item1.avif", "item2.avif", "item3.avif", "item4.avif", "item5.avif", "item6.avif", "item7.avif"
//   ];

//   return (
//     <div className="top">
//       <div className="top-up">
//         <h3>Best and Most Popular dishes in India..</h3>
//       </div>
//       <div className="top-down">
//         <div className="slide-content">
//           {images.map((src, index) => (
//             <img key={index} src={src} alt={`dish-${index}`} height="150px" width="170px" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const TableBooking = () => {
//   return (
//     <div className="down">
//       <div className="down-top">
//         <h3>Book your table!..</h3>
//         <img src="slideimg.avif" alt="table booking" height="50%" width="80%" />
//       </div>
//     </div>
//   );
// };

// const RestaurantCard = () => {
//   return (
//     <div className="restCard">
//       <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" alt="Biryani" />
//       <h3>Babu's Dhaba</h3>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className='body'>
//       <div className="search">Search</div>
//       <RestaurantCard />
//       <ImageSlider />
//       <TableBooking />
//     </div>
//   );
// };




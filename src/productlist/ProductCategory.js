// import React from "react";
// import xiaomiImage from "../assests/xioami.png";
// import iphoneImage from "../assests/iphone.png";
// import image1 from "../assests/image1.png";
// import iphone13 from "../assests/iphone13.png";
// import AppleItem from "./AppleItem";
// import VrpItem from "./VrpItem";
// import classes from "./productCategory.module.css";
// import { NavigationButton } from "../navigation/NavigationButton";
// import SearchIcon from "../searchbar/SearchIcon";
// import Footer from "../components/footerItem/Footer";
// import icon from "../assests/icon.png";
// import frame from "../assests/frame.png";
// export const ProductCategory = () => {
//   const cartItems = [
//     {
//       id: 1,
//       name: "Xiaomi 11 Lite NE 5G New version",
//       price: 13800,
//       quantity: 1,
//       image: xiaomiImage,
//     },
//     {
//       id: 2,
//       name: "Apple iPhone 13 New",
//       price: 23800,
//       quantity: 1,
//       image: iphoneImage,
//     },
//     {
//       id: 3,
//       name: "Xiaomi Redmi Note 9 pro",
//       price: 8800,
//       quantity: 2,
//       image: image1,
//     },
//     {
//       id: 4,
//       name: "Apple iPhone 13",
//       price: 20800,
//       quantity: 1,
//       image: iphone13,
//     },
//   ];

//   return (
//     <>
//       <div className={classes.mobigarageContainer}>
//         <img
//           src={icon}
//           alt="MOBIGARAGE Icon"
//           className={classes.mobigarageIcon}
//         />
//         <h2 className={classes.mobigarageTitle}>MobiGarage</h2>
//       </div>

//       <SearchIcon />
//       <NavigationButton />
//       <img src={frame} alt="Frame page" />
//       <div className={classes.cartContainer}>
//         <div className={classes.header}>
//           <h2 className={classes.cartTitle}>Best Selling</h2>
//           <a href="/view-more" className={classes.viewMoreLink}>
//             View More <span className={classes.arrow}>→</span>
//           </a>
//         </div>
//         <div className={classes.cartItems}>
//           {cartItems.map((item) => (
//             <div key={item.id} className={classes.cartItem}>
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className={classes.itemImage}
//               />
//               <div className={classes.itemDetails}>
//                 <p>{item.name}</p>
//                 <p>
//                   <span className={classes.text}>Starting From:</span>
//                   <span className={classes.price}>
//                     {" "}
//                     RS.{item.price.toLocaleString()}
//                   </span>
//                 </p>
//                 <p>Quantity: {item.quantity}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <AppleItem />
//       <VrpItem />
//       <Footer />
//     </>
//   );
// };

// export default ProductCategory;

import React, { useEffect, useState } from "react";
import AppleItem from "./AppleItem";
import VrpItem from "./VrpItem";
import classes from "./productCategory.module.css";
import { NavigationButton } from "../navigation/NavigationButton";
import SearchIcon from "../searchbar/SearchIcon";
import Footer from "../components/footerItem/Footer";
import icon from "../assests/icon.png";
import frame from "../assests/frame.png";
import axios from "axios"; // Import axios
import Newcart from "./NewCart";

export const ProductCategory = () => {
  const [cartItems, setCartItems] = useState([]); // State to hold cart items
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "https://dev.backend.mobigarage.com/v1/mp/admin/advertisement",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              category: "home",
              page: "landing",
            },
          }
        );
        setCartItems(response.data); // Assuming response.data contains the cart items
      } catch (error) {
        setError(error.response?.data?.message || "Error fetching cart items");
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchCartItems();
  }, []);

  return (
    <>
      <div className={classes.mobigarageContainer}>
        <img
          src={icon}
          alt="MOBIGARAGE Icon"
          className={classes.mobigarageIcon}
        />
        <h2 className={classes.mobigarageTitle}>MobiGarage</h2>
      </div>

      <SearchIcon />
      <NavigationButton />
      <img src={frame} alt="Frame page" className={classes.frameImage} />
      <div className={classes.cartContainer}>
        <div className={classes.cartItems}>
          {loading && <p>Loading...</p>} {/* Show loading indicator */}
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          {/* Show error if any */}
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <div key={item.id} className={classes.cartItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={classes.itemImage}
                />
                <div className={classes.itemDetails}>
                  <p>{item.name}</p>
                  <p>
                    <span className={classes.text}>Starting From:</span>
                    <span className={classes.price}>
                      {" "}
                      RS.{item.price.toLocaleString()}
                    </span>
                  </p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Newcart />
      <AppleItem />
      <VrpItem />
      <Footer />
    </>
  );
};

export default ProductCategory;

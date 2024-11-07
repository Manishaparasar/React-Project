import React from "react";
import xiaomiImage from "../assests/xioami.png";
import iphoneImage from "../assests/iphone.png";
import image1 from "../assests/image1.png";
import iphone13 from "../assests/iphone13.png";
import classes from "./productCategory.module.css";
import { NavigationButton } from "../navigation/NavigationButton";
import SearchIcon from "../searchbar/SearchIcon";
import Footer from "../components/footerItem/Footer";
import icon from "../assests/icon.png";
import frame from "../assests/frame.png";
import NewProfile from "../profile/NewProfile";

export const Newcart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Xiaomi 11 Lite NE 5G New version",
      price: 13800,
      quantity: 1,
      image: xiaomiImage,
    },
    {
      id: 2,
      name: "Apple iPhone 13 New",
      price: 23800,
      quantity: 1,
      image: iphoneImage,
    },
    {
      id: 3,
      name: "Xiaomi Redmi Note 9 pro",
      price: 8800,
      quantity: 2,
      image: image1,
    },
    {
      id: 4,
      name: "Apple iPhone 13",
      price: 20800,
      quantity: 1,
      image: iphone13,
    },
  ];

  return (
    <>
      {/* <div className={classes.mobigarageContainer}>
        <img
          src={icon}
          alt="MOBIGARAGE Icon"
          className={classes.mobigarageIcon}
        />
        <h2 className={classes.mobigarageTitle}>MobiGarage</h2>
      </div> */}

      {/* Uncomment if you want to use these components */}
      {/* <SearchIcon /> */}
      {/* <NavigationButton /> */}

      {/* <img src={frame} alt="Frame page" /> */}
      <div className={classes.cartContainer}>
        <div className={classes.header}>
          <h2 className={classes.cartTitle}>Best Selling</h2>
          <a href="/view-more" className={classes.viewMoreLink}>
            View More <span className={classes.arrow}>→</span>
          </a>
        </div>
        <div className={classes.cartItems}>
          {cartItems.map((item) => (
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
    </>
  );
};

export default Newcart;

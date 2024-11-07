import React from "react";
import iphone14 from "../assests/iphone14.png";
import iphones13 from "../assests/iphones13.png";
import iphone11 from "../assests/iphone11.png";
import classes from "./appleItem.module.css";
export const AppleItem = () => {
  const appleItems = [
    {
      id: 1,
      name: "iPhone 14",
      price: 13800,
      quantity: 1,
      image: iphone14,
    },
    {
      id: 2,
      name: "iPhone 13",
      price: 23800,
      quantity: 3,
      image: iphones13,
    },
    {
      id: 3,
      name: "iPhone 14.1",
      price: 8800,
      quantity: 2,
      image: iphone14,
    },
    {
      id: 4,
      name: "iPhone 11",
      price: 20800,
      quantity: 4,
      image: iphone11,
    },
  ];

  return (
    <div className={classes.appleItemContainer}>
      <div className={classes.titleContainer}>
        <h2 className={classes.title}>Best Selling Apple</h2>
        <a href="/view-more" className={classes.viewMoreLink}>
          View More <span className={classes.arrow}>→</span>
        </a>
      </div>
      <div className={classes.itemList}>
        {appleItems.map((item) => (
          <div key={item.id} className={classes.itemCard}>
            <img
              src={item.image}
              alt={item.name}
              className={classes.itemImage}
            />
            <div className={classes.itemDetails}>
              <p>{item.name}</p>
              <p>
                {" "}
                <span className={classes.text}>Starting From:</span>
                <span className={classes.price}>
                  Rs.{item.price.toLocaleString()}
                </span>
              </p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppleItem;

import React from "react";
import vrp from "../assests/vrp.png";
import vrp2 from "../assests/vrp2.png";
import vrp3 from "../assests/vrp3.png";
import vrp4 from "../assests/vrp4.png";
import classes from "./vrpItem.module.css";

export const VrpItem = () => {
  const vrpItems = [
    {
      id: 1,
      name: "VRP No. #8456321",
      price: 13800,
      quantity: 1,
      image: vrp,
    },
    {
      id: 2,
      name: "VRP No. #8456321",
      price: 15800,
      quantity: 2,
      image: vrp2,
    },
    {
      id: 3,
      name: "VRP No. #8456321",
      price: 23800,
      quantity: 1,
      image: vrp3,
    },
    {
      id: 4,
      name: "VRP No. #8456321",
      price: 33800,
      quantity: 3,
      image: vrp4,
    },
  ];

  return (
    <div className={classes.vrpItemContainer}>
      <div className={classes.header}>
        <h2 className={classes.title}>VRP Hot Deals</h2>
        <a href="/view-more" className={classes.viewMoreLink}>
          View More <span className={classes.arrow}>→</span>
        </a>
      </div>

      <div className={classes.itemList}>
        {vrpItems.map((item) => (
          <div key={item.id} className={classes.itemCard}>
            <img
              src={item.image}
              alt={item.name}
              className={classes.itemImage}
            />
            <div className={classes.itemDetails}>
              <p>{item.name}</p>
              <p>
                <span className={classes.text}>Starting From: </span>
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

export default VrpItem;

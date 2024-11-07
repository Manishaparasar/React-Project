import React from "react";
import realme from "./assets/realme.png";
import phone from "./assets/phone.png";
import phone1 from "./assets/phone1.png";
import frame from "../assests/frame.png";
import styles from "./Prexo.module.css";
import Footer from "../components/footerItem/Footer";
import SearchIcon from "../searchbar/SearchIcon";

const Prexo = () => {
  const cartItems = [
    {
      //   id: 1,
      name: "Xiaomi 11 Lite NE 5G New",
      price: "Rs.13,800",
      imageUrl: realme,
    },
    {
      //   id: 2,
      name: "Xiaomi 11 Lite NE 5G-14",
      price: "Rs.13,800",
      imageUrl: phone,
    },
    {
      //   id: 3,
      name: "Realme Narzo 11 Lite NE 5G",
      price: "Rs.13,800",
      imageUrl: phone1,
    },
  ];

  return (
    <>
      <SearchIcon />
      <img src={frame} alt="frame of prexo" className={styles.frameImage} />
      <div className={styles.cartContainer}>
        {cartItems.map((item) => (
          <div className={styles.cartItem} key={item.id}>
            <img
              src={item.imageUrl}
              alt={item.name}
              className={styles.cartItemImage} // Image on the left
            />
            <div className={styles.textContainer}>
              <h4 className={styles.cartItemId}>{item.name}</h4>
              <p className={styles.devicesSold}>Devices sold: 25</p>
              <p className={styles.price}>
                Starting From <span>{item.price}</span>
              </p>
              <div className={styles.cartItemDetails}>
                <h3 className={styles.deviceName}>{item.id}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Prexo;

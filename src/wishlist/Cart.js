import React from "react";
import styles from "./cart.module.css"; // Using CSS module for scoped styles
import heart from "../assests/heart.png";
import box from "../assests/box.png";
import box2 from "../assests/box2.png";
import box3 from "../assests/box3.png";
import box4 from "../assests/box4.png";
import Footer from "../components/footerItem/Footer";
import SearchIcon from "../searchbar/SearchIcon";

const Cart = () => {
  const products = [
    {
      image: box,
      title: "VRP",
      id: "#123456",
      totalPhones: 50,
      //   asp: 25,
      //   p4: "15%",
      priceBefore: "Rs.13,800",
      discount: "43% Discount",
    },
    {
      image: box2,
      title: "Prexo",
      id: "Xiaomi 11 Lite NE 5G New",
      totalPhones: 25,
      priceBefore: "Rs.13,800",
      discount: "43% Discount",
    },
    {
      image: box3,
      title: "Open Box",
      id: "Xiaomi 11 Lite NE 5G Pro",
      priceBefore: "Rs 13,800",
      discount: "43% Discount",
    },
    {
      image: box4, // This will retain the same styling
      title: "VRP",
      id: "#123457",
      totalPhones: 50,
      //   asp: 25,
      //   p4: "15%",
      priceBefore: "Rs.13,800",
      discount: "43% Discount",
    },
  ];

  return (
    <>
      <SearchIcon />

      <div className={styles.cartContainer}>
        {products.map((product, index) => (
          <div key={index} className={styles.cart}>
            <img src={heart} alt="icon of heart" className={styles.icon} />
            <div className={styles.cartContent}>
              <img
                src={product.image}
                alt="Product"
                className={styles.cartImage}
              />
              <div className={styles.textContainer}>
                <h2
                  className={`${styles.productTitle} ${
                    product.title === "VRP" ? styles.vrpColor : ""
                  }`}
                >
                  {product.title}
                </h2>
                <p>ID: {product.id}</p>
                {product.totalPhones && (
                  <p>Total Phones: {product.totalPhones}</p>
                )}
                {product.asp && <p>ASP: {product.asp}</p>}
                {product.p4 && <p>P4%: {product.p4}</p>}
                <div className={styles.priceContainer}>
                  <p className={styles.priceBefore}>{product.priceBefore}</p>
                  <span className={styles.discount}>{product.discount}</span>
                </div>
                <div className={styles.cartButtons}>
                  <button className={styles.addToCart}>Add to Cart</button>
                  <button className={styles.buyNow}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Cart;

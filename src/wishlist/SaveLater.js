import React, { useState } from "react";
import box2 from "../assests/box2.png";
import box3 from "../assests/box3.png";
import box from "../assests/box.png";
import box4 from "../assests/box4.png";
import styles from "./saveLater.module.css";
import SearchIcon from "../searchbar/SearchIcon";
import Footer from "../components/footerItem/Footer";

const CartItem = ({
  id,
  image,
  price,
  description,
  hasQuantityControls,
  onRemove,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemContent}>
        <img
          src={image}
          alt={`Product ${id}`}
          className={styles.productImage}
        />
        <div className={styles.cartDetails}>
          <div className={styles.discountMessage}>43% Discount</div>
          <p className={styles.productId}>ID: {id}</p>
          <p className={styles.productPrice}>Price: ₹{price}</p>
          <div className={styles.productInfo}>
            <p>{description}</p>
          </div>
          {hasQuantityControls && (
            <div className={styles.quantityControls}>
              <button
                onClick={handleDecrement}
                className={styles.quantityButton}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                onClick={handleIncrement}
                className={styles.quantityButton}
              >
                +
              </button>
            </div>
          )}
          {/* Move cart actions under product details */}
          <div className={styles.cartActions}>
            <button
              className={styles.removeButton}
              onClick={() => onRemove(id)}
            >
              Remove
            </button>
            <button className={styles.saveButton}>Save for Later</button>
            <button className={styles.buyButton}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SaveLater = () => {
  const initialItems = [
    {
      id: 1,
      image: box2,
      price: 1999,
      description:
        "Xiaomi 11 Lite NE 5G New\nDevices sold: 25\nStarting From ₹13,800",
      hasQuantityControls: true,
    },
    {
      id: 2,
      image: box3,
      price: 2999,
      description: "Xiaomi 11 Lite NE 5G New\nStarting From ₹13,800",
      hasQuantityControls: true,
    },
    {
      id: 3,
      image: box,
      price: 3999,
      description: "VRP: #123456 nTotal Phones: 50 ASP: 25 P4%: 15%",
      hasQuantityControls: false,
    },
    {
      id: 4,
      image: box4,
      price: 4999,
      description: "VRP: #123456 Total Phones: 50 ASP: 25 P4%: 15%",
      hasQuantityControls: false,
    },
  ];

  const [cartItems, setCartItems] = useState(initialItems);

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.searchContainer}>
      <SearchIcon />
      <div className={styles.cartContainer}>
        {/* <SearchIcon /> */}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            // id={item.id}
            image={item.image}
            price={item.price}
            description={item.description}
            hasQuantityControls={item.hasQuantityControls}
            onRemove={handleRemoveItem}
          />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default SaveLater;

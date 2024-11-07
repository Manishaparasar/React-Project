// import React, { useEffect, useState } from "react";
// import styles from "./vrpPage.module.css";
// import ButtonVrp from "../button/ButtonVrp";
// import vrp_img from "../assests/Vrp_img.png";
// import discount from "../assests/discount.png";
// import Footer from "../components/footerItem/Footer";
// import vector from "../assests/Vector.png"; // Importing vector image
// import SearchIcon from "../searchbar/SearchIcon";
// import Filter from "../filter/Filter";

// const ItemCard = ({
//   title,
//   description,
//   imgSrc,
//   oldPrice,
//   newPrice,
//   onAddToCart,
//   onBuyNow,
// }) => {
//   return (
//     <div className={styles.card}>
//       <img src={imgSrc} alt={title} className={styles.cardImage} />
//       <div className={styles.textContainer}>
//         <h3 className={styles.cardTitle}>{title}</h3>
//         <div className={styles.priceContainer}>
//           <p className={styles.oldPrice}>Rs. {oldPrice}</p>
//           <p className={styles.cardDescription}>Rs. {newPrice}</p>
//         </div>
//         <ButtonVrp onAddToCart={onAddToCart} onBuyNow={onBuyNow} />{" "}
//         {/* Pass the functions */}
//       </div>
//       <img src={vector} alt="Vector Icon" className={styles.vectorImage} />
//     </div>
//   );
// };

// export const VrpPage = () => {
//   const [items, setItems] = useState([]);
//   const [cart, setCart] = useState([]); // State for cart items

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://dev.backend.mobigarage.com/v1/mp/vrp/"
//         );
//         const data = await response.json();

//         console.log("Fetched data:", data);

//         if (Array.isArray(data.data)) {
//           setItems(data.data);
//         } else {
//           console.error("Expected an array of items");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const displayItems =
//     items.length === 0
//       ? Array(4).fill({
//           title: "Lot ID: #123456",
//           oldPrice: 15800,
//           newPrice: 13800,
//           image: discount,
//         })
//       : items.map((item) => ({
//           title: `Lot ID: #${item.id || "123456"}`, // Dynamically set Lot ID if available
//           oldPrice: item.oldPrice || 15800,
//           newPrice: item.newPrice || 13800,
//           image: item.image || vrp_img,
//         }));

//   const handleAddToCart = (item) => {
//     setCart((prevCart) => [...prevCart, item]); // Add item to cart
//     console.log("Item added to cart:", item);
//   };

//   const handleBuyNow = (item) => {
//     console.log("Proceeding to buy:", item); // Logic for buying can be added here
//   };

//   return (
//     <>
//       <SearchIcon />
//       <br />
//       <Filter />

//       <div className={styles.cardContainer}>
//         {displayItems.map((item, index) => (
//           <ItemCard
//             key={index}
//             title={item.title}
//             description={`Rs.${item.newPrice}`}
//             imgSrc={item.image}
//             oldPrice={item.oldPrice}
//             newPrice={item.newPrice}
//             onAddToCart={() => handleAddToCart(item)} // Pass the item to add to cart
//             onBuyNow={() => handleBuyNow(item)} // Pass the item to buy
//           />
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };
import React, { useEffect, useState } from "react";
import styles from "./vrpPage.module.css";
import ButtonVrp from "../button/ButtonVrp";
import vrp_img from "../assests/Vrp_img.png";
import discount from "../assests/discount.png";
import Footer from "../components/footerItem/Footer";
import vector from "../assests/Vector.png";
import SearchIcon from "../searchbar/SearchIcon";
import Filter from "../filter/Filter";

const ItemCard = ({
  title,
  description,
  imgSrc,
  oldPrice,
  newPrice,
  discount,
  onAddToCart,
  onBuyNow,
}) => (
  <div className={styles.card}>
    <img src={imgSrc} alt={title} className={styles.cardImage} />
    <div className={styles.textContainer}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDiscount}>Discount: {discount}%</p>
      <div className={styles.priceContainer}>
        <p className={styles.oldPrice}>Original Price: Rs. {oldPrice}</p>
        <p className={styles.newPrice}>Rate Card Price: Rs. {newPrice}</p>
      </div>
      <ButtonVrp onAddToCart={onAddToCart} onBuyNow={onBuyNow} />
    </div>
    <img src={vector} alt="Vector Icon" className={styles.vectorImage} />
  </div>
);

export const VrpPage = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.backend.mobigarage.com/v1/mp/vrp/"
        );
        const data = await response.json();
        if (data.status && Array.isArray(data.data)) {
          setItems(data.data);
        } else {
          console.error("Error: Expected an array of items in 'data'");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const displayItems =
    items.length > 0
      ? items.map((item) => ({
          title: `Lot ID: #${item.lot_id}`,
          oldPrice: item.original_price,
          newPrice: item.rate_card,
          discount: item.discount_percentage,
          imgSrc: discount, // Placeholder image for each item
        }))
      : Array(4).fill({
          title: "Sample Lot ID",
          oldPrice: 50000,
          newPrice: 45000,
          discount: "7.5",
          imgSrc: vrp_img,
        });

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log("Item added to cart:", item);
  };

  const handleBuyNow = (item) => {
    console.log("Proceeding to buy:", item);
  };

  return (
    <>
      <SearchIcon />
      <br />
      <Filter />
      <div className={styles.cardContainer}>
        {displayItems.map((item, index) => (
          <ItemCard
            key={index}
            title={item.title}
            description={`Discount: ${item.discount}%`}
            imgSrc={item.imgSrc}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            discount={item.discount}
            onAddToCart={() => handleAddToCart(item)}
            onBuyNow={() => handleBuyNow(item)}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

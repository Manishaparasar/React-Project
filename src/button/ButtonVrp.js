// import React from "react";
// import classes from "./buttomVrp.module.css"; // Assuming you're using CSS Modules

// export const ButtonVrp = () => {
//   return (
//     <div className={classes.buttonContainer}>
//       <button className={`${classes.btn} ${classes.addToCart}`}>
//         Add to Cart
//       </button>
//       <button className={`${classes.btn} ${classes.buyNow}`}>Buy Now</button>
//     </div>
//   );
// };
// export default ButtonVrp;
// import React from "react";
// import classes from "./buttomVrp.module.css"; // Assuming you're using CSS Modules

// export const ButtonVrp = () => {
//   const handleAddToCart = () => {
//     // Logic for adding item to the cart
//     console.log("Item added to cart");
//   };

//   const handleBuyNow = () => {
//     // Logic for buying the item
//     console.log("Proceeding to buy");
//   };

//   return (
//     <div className={classes.buttonContainer}>
//       <button
//         className={`${classes.btn} ${classes.addToCart}`}
//         onClick={handleAddToCart} // Attach click event for adding to cart
//       >
//         Add to Cart
//       </button>
//       <button
//         className={`${classes.btn} ${classes.buyNow}`}
//         onClick={handleBuyNow} // Attach click event for buying
//       >
//         Buy Now
//       </button>
//     </div>
//   );
// };

// export default ButtonVrp;
import React from "react";
import classes from "./buttomVrp.module.css"; // Assuming you're using CSS Modules

const ButtonVrp = ({ onAddToCart, onBuyNow }) => {
  return (
    <div className={classes.buttonContainer}>
      <button
        className={`${classes.btn} ${classes.addToCart}`}
        onClick={onAddToCart}
      >
        Add to Cart
      </button>
      <button className={`${classes.btn} ${classes.buyNow}`} onClick={onBuyNow}>
        Buy Now
      </button>
    </div>
  );
};

export default ButtonVrp;

import React from "react";
import classes from "./home.module.css";
import vrp from "./assets/image 32.svg"; // Image used for all products
import NavigationButton from "./navigation/NavigationButton";
// Sample product data (replace with actual data if available)
const products = [
  {
    id: 1,
    name: "VRP No. #8456321",

    price: "Rs.13,800",
    discount: "Rs.14,800",
    image: vrp, // Main image used for all products
  },
  {
    id: 2,
    name: "VRP No. #8456321",

    price: "Rs.13,800",
    discount: "Rs.14,800",
    image: vrp, // Use the same image for all products
  },
  {
    id: 3,
    name: "VRP No. #8456321",

    price: "Rs.13,800",
    discount: "Rs.14,800",
    image: vrp, // Use the same image for all products
  },
  {
    id: 4,
    name: "VRP No. #8456321",

    price: "Rs.13,800",
    discount: "Rs.14,800",
    image: vrp, // Use the same image for all products
  },
];

export const Home = () => {
  return (
    <>
      <NavigationButton />
      <div className={classes.header}>
        <h3>VRP (Hot Deals)</h3>
        <a href="/view-more" className={classes.viewMoreLink}>
          View More <span className={classes.arrow}>→</span>
        </a>
      </div>
      {/* <h3>VRP (Hot Deals)</h3> */}
      <div className={classes.cartContainer}>
        {products.map((product) => (
          <div key={product.id} className={classes.cartItem}>
            <img
              src={product.image}
              alt={product.name}
              className={classes.productImage}
            />

            <h3 className={classes.productName}>{product.name}</h3>
            <div className={classes.text}>
              <p className={classes.text}>
                {" "}
                P4 :-<span className={classes.second}>30%</span>
              </p>
              <p className={classes.text}>
                ASP :- <span className={classes.second}>3</span>
              </p>
              <p className={classes.text}>
                Apple% :- <span className={classes.second}>20% </span>
              </p>
              <p className={classes.text}>
                #Phones :-<span className={classes.second}> 15 </span>
              </p>
            </div>
            <div className={classes.price}>
              <p>
                {" "}
                Rs.13,800 <span className={classes.span}>Rs.14,800</span>
              </p>
            </div>
            <p className={classes.productDetails}>
              {product.dis} {product.sec} {product.host} {product.fall}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

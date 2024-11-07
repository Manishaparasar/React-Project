import React from "react";
import classes from "./newProfile.module.css"; // External CSS
import user1 from "../assests/user1.png"; // Corrected the assets path
import cart1 from "../assests/cart1.png";
import heart from "../assests/heart.png";
import map from "../assests/profilemap.png";
import logout from "../assests/log-out.png";
import SearchIcon from "../searchbar/SearchIcon";

import Footer from "../components/footerItem/Footer";

export const NewProfile = () => {
  return (
    <>
      <SearchIcon />
      <div className={classes.profileContainer}>
        <div className={classes.profileButtons}>
          <button className={classes.profileBtn}>
            <img src={user1} alt="user icon" /> My Profile
          </button>
          <button className={classes.cartBtn}>
            <img src={cart1} alt="cart image" /> My Order
          </button>
          <button className={classes.wishlistBtn}>
            <img src={heart} alt="wishlist image" /> My Wishlist
          </button>
          <button className={classes.addressBtn}>
            <img src={map} alt="address icon" /> My Address
          </button>
          <button className={classes.logoutBtn}>
            <img src={logout} alt="logout icon" /> Logout
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NewProfile;

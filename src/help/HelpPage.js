import React from "react";
import classes from "./helpPage.module.css";
import user1 from "./assets/users.svg";
import box from "./assets/box.svg";
import refresh from "./assets/refresh.svg";
import setting from "./assets/settings.svg";
import credit from "./assets/credit-card.svg";
import shopping from "./assets/shopping-bag.svg";
import layer from "./assets/Layer 2.svg";
import back from "./assets/back arrow.svg";
import SearchIcon from "../searchbar/SearchIcon";
import Footer from "../components/footerItem/Footer";

const HelpPage = () => {
  const items = [
    { id: 1, image: user1, text: "Account" },
    { id: 2, image: box, text: "Products" },
    { id: 3, image: refresh, text: "Returns & Exchanges" },
    { id: 4, image: setting, text: "Offers/Coupons" },
    { id: 5, image: credit, text: "Payments" },
    { id: 6, image: shopping, text: "Orders" },
  ];

  return (
    <>
      <SearchIcon />
      <div className={classes.container}>
        <div className={classes.type}>
          <h2 className={classes.heading}>Help Center</h2>
          <p className={classes.paragraph}>
            Lorium was an ancient village
            <br />
            of ancient Etruria, Italy, on the
            <br />
            Via Aurelia,
          </p>
        </div>
        <img src={layer} alt="Layer" className={classes.headerimage} />
      </div>

      <div className={classes.header}>
        <h2>Browse Topics</h2>
      </div>
      <div className={classes.container}>
        {items.map((item) => (
          <div key={item.id} className={classes.item}>
            <img src={item.image} alt={item.text} className={classes.image} />
            <p className={classes.text}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={classes.box}>
        <p>
          How do I login to account?
          <img src={back} alt="Back" className={classes.backImage} />
        </p>

        <p>
          Why am I not getting an OTP?
          <img src={back} alt="Back" className={classes.backImage} />
        </p>

        <p>
          I am not getting forgot password link?
          <img src={back} alt="Back" className={classes.backImage} />
        </p>

        <p>
          Why am I not getting an OTP?
          <img src={back} alt="Back" className={classes.backImage} />
        </p>
      </div>

      <Footer />
    </>
  );
};

export default HelpPage;

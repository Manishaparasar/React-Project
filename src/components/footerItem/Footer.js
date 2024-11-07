// import React from "react";
// import home from "../../assests/home.png";
// import grid from "../../assests/grid.png";
// import alert from "../../assests/alert-circle.png";
// import cart from "../../assests/cart.png";
// import user from "../../assests/user.png";
// import classes from "./footer.module.css";

// const Footer = () => {
//   return (
//     <footer className={classes.footer}>
//       <div className={classes.iconContainer}>
//         <a href="/home" className={classes.iconLink}>
//           <img src={home} alt="Home" className={classes.icon} />
//           <span className={classes.text}>Home</span>
//         </a>
//         <a href="/grid" className={classes.iconLink}>
//           <img src={grid} alt="grid" className={classes.icon} />
//           <span className={classes.text}>Category</span>
//         </a>
//         <a href="/alert" className={classes.iconLink}>
//           <img src={alert} alt="Help" className={classes.icon} />
//           <span className={classes.text}>Help</span>
//         </a>
//         <a href="/cart" className={classes.iconLink}>
//           <img src={cart} alt="cart" className={classes.icon} />
//           <span className={classes.text}>cart</span>
//         </a>
//         <a href="/user" className={classes.iconLink}>
//           <img src={user} alt="Profile" className={classes.icon} />
//           <span className={classes.text}>Profile</span>
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// import React from "react";
// import { NavLink } from "react-router-dom"; // Import Link from react-router-dom
// import home from "../../assests/home.png";
// import grid from "../../assests/grid.png";
// import alert from "../../assests/alert-circle.png";
// import cart from "../../assests/cart.png";
// import user from "../../assests/user.png";
// import classes from "./footer.module.css";

// const Footer = () => {
//   return (
//     <footer className={classes.footer}>
//       <div className={classes.iconContainer}>
//         <NavLink to="/home" className={classes.iconLink}>
//           <img src={home} alt="Home" className={classes.icon} />
//           <span className={classes.text}>Home</span>
//         </NavLink>
//         <NavLink to="/grid" className={classes.iconLink}>
//           <img src={grid} alt="Grid" className={classes.icon} />
//           <span className={classes.text}>Category</span>
//         </NavLink>
//         <NavLink to="/alert" className={classes.iconLink}>
//           <img src={alert} alt="Help" className={classes.icon} />
//           <span className={classes.text}>Help</span>
//         </NavLink>
//         <NavLink to="/SaveLAter" className={classes.iconLink}>
//           <img src={cart} alt="Cart" className={classes.icon} />
//           <span className={classes.text}>Cart</span>
//         </NavLink>
//         <NavLink to="/NewProfile" className={classes.iconLink}>
//           {" "}
//           {/* Updated to link to NewProfile */}
//           <img src={user} alt="Profile" className={classes.icon} />
//           <span className={classes.text}>Profile</span>
//         </NavLink>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import home from "../../assests/home.png";
import grid from "../../assests/grid.png";
import alert from "../../assests/alert-circle.png";
import cart from "../../assests/cart.png";
import user from "../../assests/user.png";
import classes from "./footer.module.css";

const Footer = () => {
  const location = useLocation(); // Get the current location

  return (
    <footer className={classes.footer}>
      <div className={classes.iconContainer}>
        <Link
          to="/home"
          className={`${classes.iconLink} ${
            location.pathname === "/home" ? classes.active : ""
          }`}
        >
          <img src={home} alt="Home" className={classes.icon} />
          <span className={classes.text}>Home</span>
        </Link>
        <Link
          to="/CategoryPage"
          className={`${classes.iconLink} ${
            location.pathname === "/CategoryPage" ? classes.active : ""
          }`}
        >
          <img src={grid} alt="Grid" className={classes.icon} />
          <span className={classes.text}>Category</span>
        </Link>
        {/* <Link
          to="/Category"
          className={`${classes.iconLink} ${
            location.pathname === "/Category" ? classes.active : ""
          }`}
        >
          <img src={grid} alt="Grid" className={classes.icon} />
          <span className={classes.text}>Category</span>
        </Link> */}

        <Link
          to="/HelpPage"
          className={`${classes.iconLink} ${
            location.pathname === "/HelpPage" ? classes.active : ""
          }`}
        >
          <img src={alert} alt="Help" className={classes.icon} />
          <span className={classes.text}>Help</span>
        </Link>
        <Link
          to="/Cart"
          className={`${classes.iconLink} ${
            location.pathname === "/Cart" ? classes.active : ""
          }`}
        >
          <img src={cart} alt="Cart" className={classes.icon} />
          <span className={classes.text}>Cart</span>
        </Link>
        <Link
          to="/Profile"
          className={`${classes.iconLink} ${
            location.pathname === "/Profile" ? classes.active : ""
          }`}
        >
          <img src={user} alt="Profile" className={classes.icon} />
          <span className={classes.text}>Profile</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

// import { Link } from "react-router-dom";
// import profileuser from "../assests/profileuser.png";
// import shopping from "../assests/shopping-cart.png";
// import map from "../assests/map.png";
// import save from "../assests/savelater.png";
// import about from "../assests/about us.png";
// import faqs from "../assests/FAQS.png";
// import file from "../assests/file-text.png";
// import shield from "../assests/shield.png";
// import profilelast from "../assests/profileuserlast.png";
// import classes from "./profile.module.css";
// import gold from "../assests/gold.png";
// import backword from "../assests/backword.png";
// import Footer from "../components/footerItem/Footer";
// import React, { useState } from "react";
// import AddressButtons from "./AddressButton"; // Import the address buttons component

// export const Profile = () => {
//   const [showAddressButtons, setShowAddressButtons] = useState(false);

//   const profileItems = [
//     {
//       path: "/profile/edit",
//       image: profileuser,
//       title: "My Profile",
//       description: "Edit your profile here.",
//     },
//     {
//       path: "/orders",
//       image: shopping,
//       title: "My Orders",
//       description: "View your orders here.",
//     },
//     {
//       onClick: () => setShowAddressButtons(true),
//       image: map,
//       title: "Addresses",
//       description: "View and edit your addresses.",
//     },
//     {
//       path: "/save-for-later",
//       image: save,
//       title: "Save for Later",
//       description: "View your saved items.",
//     },
//     {
//       path: "/wishlist",
//       image: profilelast,
//       title: "My Wishlist",
//       description: "View your wishlist items.",
//     },
//     // Adding the header for "Other Details"
//     {
//       isHeader: true,
//       title: "Other Details",
//     },
//     {
//       path: "/about-us",
//       image: about,
//       title: "About Us",
//       description: "Learn more about us.",
//     },
//     {
//       path: "/faqs",
//       image: faqs,
//       title: "FAQs",
//       description: "Find frequently asked questions.",
//     },
//     {
//       path: "/terms-of-use",
//       image: file,
//       title: "Terms of Use",
//       description: "Read our terms of use.",
//     },
//     {
//       path: "/privacy-policy",
//       image: shield,
//       title: "Privacy Policy",
//       description: "View our privacy policy.",
//     },
//     {
//       path: "/grievance-officer",
//       image: profilelast,
//       title: "Grievance Officer",
//       description: "Contact our grievance officer.",
//     },
//   ];

//   return (
//     <>
//       {showAddressButtons ? (
//         <AddressButtons />
//       ) : (
//         <div className={classes.profileSections}>
//           <img src={gold} alt="Gold header" className={classes.headerImage} />

//           {profileItems.map((item, index) => (
//             <div
//               key={index}
//               className={classes.item}
//               onClick={item.onClick}
//               style={item.onClick ? { cursor: "pointer" } : {}}
//             >
//               {item.isHeader ? (
//                 <h5 className={classes.header}>{item.title}</h5>
//               ) : (
//                 <>
//                   <img src={item.image} alt={item.title} />
//                   <div>
//                     <h5>{item.title}</h5>
//                     <p>{item.description}</p>
//                   </div>
//                   <img
//                     src={backword}
//                     alt="Arrow icon"
//                     className={classes.arrowIcon}
//                   />
//                 </>
//               )}
//             </div>
//           ))}

//           <button className={classes.logoutButton}>Logout</button>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default Profile;

import { Link } from "react-router-dom";
import profileuser from "../assests/profileuser.png";
import shopping from "../assests/shopping-cart.png";
import map from "../assests/map.png";
import save from "../assests/savelater.png";
import about from "../assests/about us.png";
import faqs from "../assests/FAQS.png";
import file from "../assests/file-text.png";
import shield from "../assests/shield.png";
import profilelast from "../assests/profileuserlast.png";
import classes from "./profile.module.css";
import gold from "../assests/gold.png";
import backword from "../assests/backword.png";
import Footer from "../components/footerItem/Footer";
import React, { useState } from "react";
import AddressButtons from "./AddressButton"; // Import the address buttons component

export const Profile = () => {
  const [showAddressButtons, setShowAddressButtons] = useState(false);

  const profileItems = [
    {
      path: "/profile/edit",
      image: profileuser,
      title: "My Profile",
      description: "Edit your profile here.",
    },
    {
      path: "/orders",
      image: shopping,
      title: "My Orders",
      description: "View your orders here.",
    },
    {
      onClick: () => setShowAddressButtons(true),
      image: map,
      title: "Addresses",
      description: "View and edit your addresses.",
    },
    {
      path: "/save-for-later",
      image: save,
      title: "Save for Later",
      description: "View your saved items.",
    },
    {
      path: "/wishlist",
      image: profilelast,
      title: "My Wishlist",
      description: "View your wishlist items.",
    },
    // Adding the header for "Other Details"
    {
      isHeader: true,
      title: "Other Details",
    },
    {
      path: "/about-us",
      image: about,
      title: "About Us",
      description: "Learn more about us.",
    },
    {
      path: "/faqs",
      image: faqs,
      title: "FAQs",
      description: "Find frequently asked questions.",
    },
    {
      path: "/terms-of-use",
      image: file,
      title: "Terms of Use",
      description: "Read our terms of use.",
    },
    {
      path: "/privacy-policy",
      image: shield,
      title: "Privacy Policy",
      description: "View our privacy policy.",
    },
    {
      path: "/grievance-officer",
      image: profilelast,
      title: "Grievance Officer",
      description: "Contact our grievance officer.",
    },
  ];

  return (
    <>
      {showAddressButtons ? (
        <AddressButtons />
      ) : (
        <div className={classes.profileSections}>
          <img src={gold} alt="Gold header" className={classes.headerImage} />

          {profileItems.map((item, index) => (
            <div
              key={index}
              className={classes.item}
              onClick={item.onClick}
              style={item.onClick ? { cursor: "pointer" } : {}}
            >
              {item.isHeader ? (
                <h5 className={classes.header}>{item.title}</h5>
              ) : (
                <div className={classes.itemContent}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.itemImage}
                  />
                  <div className={classes.textContent}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                  <img
                    src={backword}
                    alt="Arrow icon"
                    className={classes.arrowIcon}
                  />
                </div>
              )}
            </div>
          ))}

          <button className={classes.logoutButton}>Logout</button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Profile;

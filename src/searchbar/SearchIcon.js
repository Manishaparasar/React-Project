// import React from "react";
// import search from "../assests/search.png";
// import classes from "./searchIcon.module.css";

// const SearchIcon = () => {
//   return (
//     <div className={classes.searchIcon}>
//       <input
//         type="text"
//         placeholder="Enter VRP Number"
//         // placeholder="Search for mobile, accessories & more"
//         name="search"
//         className={classes.searchInput}
//       />
//       <img src={search} alt="search icon" className={classes.imgContainer} />
//     </div>
//   );
// };

// export default SearchIcon;
import React from "react";
import search from "../assests/search.png";
import forward from "../assests/forward icon.png";
import classes from "./searchIcon.module.css";

const SearchIcon = () => {
  const handleForwardClick = () => {
    // Implement the functionality for forward click
    console.log("Forward icon clicked");
  };

  return (
    <>
      <div className={classes.icon} onClick={handleForwardClick}>
        <img src={forward} alt="forward icon" />
      </div>
      <div className={classes.searchIcon}>
        <input
          type="text"
          placeholder="Search for mobile, accessories & more"
          name="search"
          className={classes.searchInput}
        />
        {/* <div className={classes.icon} onClick={handleForwardClick}>
        <img src={forward} alt="forward icon" />
      </div> */}
        <img src={search} alt="search icon" className={classes.imgContainer} />
      </div>
    </>
  );
};

export default SearchIcon;

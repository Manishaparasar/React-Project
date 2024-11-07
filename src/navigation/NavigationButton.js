// // import React from "react";
// // import prexo from "../assests/prexo.png";
// // import vrpicon from "../assests/vrpicon.png";
// // import openbox from "../assests/open box.png";
// // import classes from "./navigationButton.module.css";

// // export const NavigationButton = () => {
// //   const buttons = [
// //     { id: 1, name: "Prexo", path: "/prexo", image: prexo },
// //     { id: 2, name: "VRP", path: "/vrp", image: vrpicon },
// //     { id: 3, name: "Open Box", path: "/openbox", image: openbox },
// //   ];

// //   return (
// //     <div className={classes.navigationContainer}>
// //       {buttons.map((button) => (
// //         <button
// //           key={button.id}
// //           id={`btn-${button.id}`}
// //           className={classes.button}
// //           onClick={() => (window.location.href = button.path)}
// //         >
// //           <img src={button.image} alt={button.name} />
// //           {button.name}
// //         </button>
// //       ))}
// //     </div>
// //   );
// // };
// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import prexo from "../assests/prexo.png";
// import vrpicon from "../assests/vrpicon.png";
// import openbox from "../assests/open box.png";
// import classes from "./navigationButton.module.css";
// import spares from "../assests/spares.png";
// import newphone from "../assests/newphone.png";
// export const NavigationButton = () => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const buttons = [
//     { id: 1, name: "Prexo", path: "/prexo", image: prexo },
//     { id: 2, name: "VRP", path: "/vrp", image: vrpicon },
//     { id: 3, name: "Open Box", path: "/openbox", image: openbox },
//     { id: 3, name: "Spares", path: "/spares", image: spares },
//     { id: 3, name: "New Phone", path: "/newphone", image: newphone },
//   ];

//   return (
//     <div className={classes.navigationContainer}>
//       {buttons.map((button) => (
//         <button
//           key={button.id}
//           id={`btn-${button.id}`}
//           className={classes.button}
//           onClick={() => navigate(button.path)} // Use navigate for routing
//         >
//           <img src={button.image} alt={button.name} />
//           {button.name}
//         </button>
//       ))}
//     </div>
//   );
// };
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import prexo from "../assests/prexo.png";
import vrpicon from "../assests/vrpicon.png";
import openbox from "../assests/open box.png";
import spares from "../assests/spares.png";
import newphone from "../assests/newphone.png";
import classes from "./navigationButton.module.css";

export const NavigationButton = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const buttons = [
    { id: 1, name: "Prexo", path: "/prexo", image: prexo },
    { id: 2, name: "VRP", path: "/vrp", image: vrpicon },
    { id: 3, name: "Open Box", path: "/openbox", image: openbox },
    { id: 4, name: "Spares", path: "/spares", image: spares }, // Unique id
    { id: 5, name: "New Phone", path: "/newphone", image: newphone }, // Unique id
  ];

  return (
    <div className={classes.navigationContainer}>
      {buttons.map((button) => (
        <button
          key={button.id}
          id={`btn-${button.id}`}
          className={classes.button}
          onClick={() => navigate(button.path)} // Use navigate for routing
        >
          <img src={button.image} alt={button.name} />
          {button.name}
        </button>
      ))}
    </div>
  );
};

import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import OtpInput from "./components/OtpInput";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import { NewProfile } from "./profile/NewProfile";
import Cart from "./wishlist/Cart";
import VrpItem from "./productlist/VrpItem";
import { VrpPage } from "./card/VrpPage";
import Filter from "./filter/Filter";
import SaveLater from "./wishlist/SaveLater";
import Profile from "./finaluser/Profile";
import Prexo from "./prexo/Prexo";
import HelpPage from "./help/HelpPage";
// import HomePage from "./home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/otp",
    element: (
      <PrivateRoute>
        <OtpInput />
      </PrivateRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/vrp", // Use the correct path here
    element: (
      <PrivateRoute>
        <VrpPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/Home", // Use the correct path here
    element: (
      <PrivateRoute>
        <Home /> {/* Render the VrpPage component */}
      </PrivateRoute>
    ),
  },
  // {
  //   path: "/NewProfile",
  //   element: (
  //     <PrivateRoute>
  //       <NewProfile />
  //     </PrivateRoute>
  //   ),
  // },
  {
    path: "/Cart",
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
  },
  {
    path: "/Profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/HelpPage",
    element: (
      <PrivateRoute>
        <HelpPage />
      </PrivateRoute>
    ),
  },
]);

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
};

export default App;
// import React from "react";
// import "./App.css";
// import CartReview from "./finaluser/CartReview";

// export const App = () => {
//   return <CartReview />;
// };
// export default App;

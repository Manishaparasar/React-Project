import React from "react";
import { Outlet } from "react-router-dom";
import ProductCategory from "../productlist/ProductCategory";
import icon from "../assests/icon.png";
export const Home = () => {
  return (
    <div>
      <ProductCategory />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import styles from "./filter.module.css"; // Adjust the path according to your folder structure

export const Filter = () => {
  const [sortOrder, setSortOrder] = useState("default");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    // Add your sort logic here based on sortOrder
    console.log("Selected Sort Order:", e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      {/* Sort Dropdown */}
      <select
        value={sortOrder}
        onChange={handleSortChange}
        className={styles.sortSelect}
      >
        <option value="default">Sort</option>
        <option value="lotPriceLowToHigh">Lot Price - Low to High</option>
        <option value="lotPriceHighToLow">Lot Price - High to Low</option>
        <option value="aspLowToHigh">ASP - Low to High</option>
        <option value="aspHighToLow">ASP - High to Low</option>
        <option value="p4LowToHigh">P4% - Low to High</option>
        <option value="p4HighToLow">P4% - High to Low</option>
        <option value="appleLowToHigh">Apple% - Low to High</option>
        <option value="appleHighToLow">Apple% - High to Low</option>
        <option value="totalPhonesLowToHigh">Total Phones - Low to High</option>
        <option value="totalPhonesHighToLow">Total Phones - High to Low</option>
      </select>
    </div>
  );
};

export default Filter;

import React from "react";
import classes from "./addressReview.module.css";
import CartReview from "./CartReview";

const AddressReview = ({ formData, onEdit, onConfirm }) => {
  return (
    <>
      <h3>Selected address</h3>
      <div className={classes.reviewContainer}>
        <div className={classes.reviewItem}>
          <strong></strong> {formData.name}
        </div>
        <div className={classes.reviewItem}>
          <strong></strong> {formData.mobile_no}
        </div>
        <div className={classes.reviewItem}>
          <strong></strong> {formData.address_line1}, {formData.address_line2}
        </div>
        <div className={classes.reviewItem}>
          <strong></strong> {formData.city}
        </div>
        <div className={classes.reviewItem}>
          <strong></strong> {formData.state}
        </div>
        <div className={classes.reviewItem}>
          <strong></strong> {formData.postal_code}
        </div>
        <div className={classes.reviewItem}>
          <strong></strong> {formData.country}
        </div>
        <div className={classes.reviewItem}>
          {/* <strong></strong> {formData.is_default ? "Yes" : "No"} */}
        </div>
      </div>
      <CartReview />
    </>
  );
};

export default AddressReview;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import classes from "./addressReview.module.css";
// import CartReview from "./CartReview";

// const AddressReview = ({ formData, onEdit, onConfirm }) => {
//   const [cartData, setCartData] = useState(null);
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMyIsImV4cCI6MTczMDM0Njk2MX0.7iWiCW9_IZ-OpOqyvapA0TUeYkpcrBjgc3wZ9fCMMcc";

//   useEffect(() => {
//     // Fetch the cart review data
//     const fetchCartReview = async () => {
//       try {
//         const response = await axios.get(
//           `https://dev.backend.mobigarage.com/v1/mp/cart/review?address_id=18&coupon_code=6`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setCartData(response.data);
//       } catch (error) {
//         console.error("Error fetching cart review data:", error);
//       }
//     };

//     fetchCartReview();
//   }, []);

//   return (
//     <>
//       <h3>Selected address</h3>
//       <div className={classes.reviewContainer}>
//         <div className={classes.reviewItem}>
//           <strong>Name:</strong> {formData.name}
//         </div>
//         <div className={classes.reviewItem}>
//           <strong>Phone Number:</strong> {formData.mobile_no}
//         </div>
//         <div className={classes.reviewItem}>
//           <strong>Address:</strong> {formData.address_line1},{" "}
//           {formData.address_line2}
//         </div>
//         <div className={classes.reviewItem}>
//           <strong>City:</strong> {formData.city}
//         </div>
//         <div className={classes.reviewItem}>
//           <strong>State:</strong> {formData.state}
//         </div>
//         <div className={classes.reviewItem}>
//           <strong>Pincode:</strong> {formData.postal_code}
//         </div>
//         <div className={classes.reviewItem}>
//           <strong>Country:</strong> {formData.country}
//         </div>
//         <div className={classes.reviewItem}>
//           <strong>Default Address:</strong> {formData.is_default ? "Yes" : "No"}
//         </div>
//         <div className={classes.buttonGroup}>
//           <button onClick={onEdit} className={classes.editBtn}>
//             Edit
//           </button>
//           <button onClick={onConfirm} className={classes.confirmBtn}>
//             Confirm
//           </button>
//         </div>
//       </div>

//       {/* Pass cartData and token to CartReview */}
//       {cartData && <CartReview cartData={cartData} token={token} />}
//     </>
//   );
// };

// export default AddressReview;

// import React from "react";

// const addresses = [
//   {
//     id: 1,
//     name: "Sachin",
//     mobile: "7838939694",
//     addressLine1: "Saderpur Colony",
//     addressLine2: "Sec 44",
//     city: "Noida",
//     state: "Uttar Pradesh",
//     country: "India",
//     postalCode: "201301",
//     isDefault: true,
//   },
//   // Add more address objects here if needed
// ];

// export const Address = () => {
//   return (
//     <div>
//       {addresses.map((address) => (
//         <div
//           key={address.id}
//           style={{
//             marginBottom: "1rem",
//             border: "1px solid #ddd",
//             padding: "1rem",
//           }}
//         >
//           <p>
//             <strong>ID:</strong> {address.id}
//           </p>
//           <p>
//             <strong>Name:</strong> {address.name}
//           </p>
//           <p>
//             <strong>Mobile No:</strong> {address.mobile}
//           </p>
//           <p>
//             <strong>Address Line 1:</strong> {address.addressLine1}
//           </p>
//           <p>
//             <strong>Address Line 2:</strong> {address.addressLine2}
//           </p>
//           <p>
//             <strong>City:</strong> {address.city}
//           </p>
//           <p>
//             <strong>State:</strong> {address.state}
//           </p>
//           <p>
//             <strong>Country:</strong> {address.country}
//           </p>
//           <p>
//             <strong>Postal Code:</strong> {address.postalCode}
//           </p>
//           <p>
//             <strong>Is Default:</strong> {address.isDefault ? "Yes" : "No"}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Address;
// Address.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./address.module.css";

const Address = () => {
  const [addresses, setAddresses] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMyIsImV4cCI6MTczMDM0Njk2MX0.7iWiCW9_IZ-OpOqyvapA0TUeYkpcrBjgc3wZ9fCMMcc";

  // Fetch addresses from the backend
  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        "https://dev.backend.mobigarage.com/v1/mp/addresses",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Fetched addresses:", response.data.data);
      setAddresses(response.data.data || []);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  // Fetch addresses on component mount
  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <div className={classes.addressList}>
      {addresses.length === 0 ? (
        <p>No addresses available. Please add an address.</p>
      ) : (
        addresses.map((address) => (
          <div key={address.id} className={classes.addressItem}>
            <p>
              <strong>Name:</strong> {address.name}
            </p>
            <p>
              <strong>Mobile No:</strong> {address.mobile_no}
            </p>
            <p>
              <strong>Address Line 1:</strong> {address.address_line1}
            </p>
            <p>
              <strong>Address Line 2:</strong> {address.address_line2}
            </p>
            <p>
              <strong>City:</strong> {address.city}
            </p>
            <p>
              <strong>State:</strong> {address.state}
            </p>
            <p>
              <strong>Country:</strong> {address.country}
            </p>
            <p>
              <strong>Postal Code:</strong> {address.postal_code}
            </p>
            <p>
              <strong>Is Default:</strong> {address.is_default ? "Yes" : "No"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Address;

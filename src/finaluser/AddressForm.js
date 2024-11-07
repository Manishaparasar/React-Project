// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import backButton from "./assets/arrow-left.svg";
// import classes from "./addressForm.module.css";

// const AddressForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile_no: "",
//     postal_code: "",
//     address_line1: "",
//     address_line2: "",
//     city: "",
//     state: "",
//     country: "India",
//     is_default: false,
//   });

//   const [submittedData, setSubmittedData] = useState(null);
//   const [addresses, setAddresses] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);

//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNSIsImV4cCI6MTczMDg3NTYyOH0.dVcbzA_J5atLBk5PjbOgB28F_vif5SblAtXpm13Fg9s";
//   const hasFetchedAddresses = useRef(false);

//   const fetchAddresses = async () => {
//     try {
//       const response = await axios.get(
//         "https://dev.backend.mobigarage.com/v1/mp/addresses",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Fetched addresses:", response.data.data);
//       setAddresses(response.data.data || []);
//     } catch (error) {
//       console.error("Error fetching addresses:", error);
//     }
//   };

//   useEffect(() => {
//     if (!hasFetchedAddresses.current) {
//       fetchAddresses();
//       hasFetchedAddresses.current = true;
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const method = editingIndex !== null ? "put" : "post";
//       const response = await axios[method](
//         "https://dev.backend.mobigarage.com/v1/mp/addresses",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setSubmittedData(response.data);
//       console.log("Form submitted:", response.data);

//       fetchAddresses();
//       setFormData({
//         name: "",
//         mobile_no: "",
//         postal_code: "",
//         address_line1: "",
//         address_line2: "",
//         city: "",
//         state: "",
//         country: "India",
//         is_default: false,
//       });
//       setEditingIndex(null);
//     } catch (error) {
//       console.error("Error submitting address:", error);
//     }
//   };

//   const handleEdit = (index) => {
//     const addressToEdit = addresses[index];
//     setFormData(addressToEdit);
//     setEditingIndex(index);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(
//         `https://dev.backend.mobigarage.com/v1/mp/addresses?id=${id}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       fetchAddresses();
//       console.log("Address deleted successfully");
//     } catch (error) {
//       console.error("Error deleting address:", error);
//     }
//   };

//   return (
//     <>
//       <img src={backButton} alt="Back" className={classes.backButton} />
//       <form onSubmit={handleSubmit} className={classes.addressForm}>
//         <div className={classes.formHeader}>
//           <h3>{editingIndex !== null ? "Edit Address" : "Add Address"}</h3>
//         </div>

//         <div className={classes.formGroup}>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             placeholder=" "
//             className={classes.formInput}
//           />
//           <label htmlFor="name" className={classes.label}>
//             Full Name (First and Last name)
//           </label>
//         </div>
//         <br />
//         <div className={classes.formGroup}>
//           <input
//             type="text"
//             id="mobile_no"
//             name="mobile_no"
//             value={formData.mobile_no}
//             onChange={handleChange}
//             required
//             placeholder=" "
//             className={classes.formInput}
//           />
//           <label htmlFor="mobile_no" className={classes.label}>
//             Phone Number*
//           </label>
//         </div>
//         <p className={classes.helpText}>May be used to assist delivery</p>
//         <div className={classes.formGroup}>
//           {/* <p className={classes.helpText}>May be used to assist delivery</p> */}
//           <button type="button" className={classes.useLocationBtn}>
//             Use my location
//           </button>
//         </div>
//         <br />
//         <div className={classes.formGroup}>
//           <input
//             type="text"
//             id="address_line1"
//             name="address_line1"
//             value={formData.address_line1}
//             onChange={handleChange}
//             required
//             placeholder=" "
//             className={classes.formInput}
//           />
//           <label htmlFor="address_line1" className={classes.label}>
//             Flat, House no, Building, Company
//           </label>
//         </div>
//         <br />
//         <div className={classes.formGroup}>
//           <input
//             type="text"
//             id="address_line2"
//             name="address_line2"
//             value={formData.address_line2}
//             onChange={handleChange}
//             placeholder=" "
//             className={classes.formInput}
//           />
//           <label htmlFor="address_line2" className={classes.label}>
//             Area, Street, Sector, Village
//           </label>
//         </div>
//         <br />
//         <div className={classes.formGroup}>
//           <input
//             type="text"
//             id="address_line2"
//             name="address_line2"
//             value={formData.address_line2}
//             onChange={handleChange}
//             placeholder=" "
//             className={classes.formInput}
//           />
//           <label htmlFor="address_line2" className={classes.label}>
//             Landmark
//           </label>
//         </div>
//         <br />
//         <div className={classes.formGroup}>
//           <input
//             type="text"
//             id="city"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             required
//             placeholder=" "
//             className={classes.formInput}
//           />
//           <label htmlFor="city" className={classes.label}>
//             Town/City
//           </label>
//         </div>
//         {/* <br /> */}

//         <div className={classes.formGroup}>
//           <input
//             type="text"
//             id="postal_code"
//             name="postal_code"
//             value={formData.postal_code}
//             onChange={handleChange}
//             required
//             placeholder=" "
//             className={classes.formInput}
//           />
//           <label htmlFor="postal_code" className={classes.label}>
//             Pincode
//           </label>
//         </div>
//         <br />
//         <div className={classes.formGroup}>
//           <input
//             type="text"
//             id="state"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             required
//             placeholder=" "
//             className={classes.formInput}
//           />
//           <label htmlFor="state" className={classes.label}>
//             State
//           </label>
//         </div>
//         <br />
//         <div className={classes.formGroup}>
//           <label>
//             <input
//               type="checkbox"
//               name="is_default"
//               checked={formData.is_default}
//               onChange={handleChange}
//             />
//             Make this my default address
//           </label>
//         </div>
//         <br />
//         <button type="submit" className={classes.submitBtn}>
//           {editingIndex !== null ? "Update" : "Save"}
//         </button>
//       </form>

//       <div className={classes.addressList}>
//         {addresses.length === 0 ? (
//           <p></p>
//         ) : (
//           addresses.map((address, index) => (
//             <div key={index} className={classes.addressItem}>
//               <div>
//                 <strong></strong> {address.name}
//               </div>
//               <div>
//                 <strong></strong> {address.mobile_no}
//               </div>
//               <div>
//                 <strong></strong> {address.address_line1},{" "}
//                 {address.address_line2}
//               </div>
//               <div>
//                 <strong></strong> {address.city}
//               </div>
//               <div>
//                 <strong></strong> {address.state}
//               </div>
//               <div>
//                 <strong></strong> {address.country}
//               </div>
//               <div>
//                 <strong></strong> {address.postal_code}
//               </div>
//               <br />
//               <button
//                 onClick={() => handleEdit(index)}
//                 className={classes.editBtn}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(address.id)}
//                 className={classes.deleteBtn}
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default AddressForm;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import backButton from "./assets/arrow-left.svg";
// import classes from "./addressForm.module.css";
// import AddressReview from "./AddressReview";

// const AddressForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile_no: "",
//     postal_code: "",
//     address_line1: "",
//     address_line2: "",
//     landmark: "",
//     city: "",
//     state: "",
//     country: "India",
//     is_default: false,
//   });
//   const [isReviewing, setIsReviewing] = useState(false);
//   const [addressId, setAddressId] = useState(null);
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMCIsImV4cCI6MTczMDc5MzkzMn0.LLGpkNqjDW5yHcLrH_in89vxXVNzTBiUHTDmJoW11No";

//   useEffect(() => {
//     // Fetch existing address data on load
//     const fetchAddress = async () => {
//       try {
//         const response = await axios.get(
//           "https://dev.backend.mobigarage.com/v1/mp/addresses",
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         if (response.data.length > 0) {
//           const addressData = response.data[0]; // assuming only one address
//           setFormData(addressData);
//           setAddressId(addressData.id);
//         }
//       } catch (error) {
//         console.error("Error fetching address:", error);
//       }
//     };
//     fetchAddress();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsReviewing(true);
//   };

//   const handleConfirm = async () => {
//     try {
//       if (addressId) {
//         // Update address if it exists
//         await axios.put(
//           `https://dev.backend.mobigarage.com/v1/mp/addresses/${addressId}`,
//           formData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//       } else {
//         // Save new address
//         const response = await axios.post(
//           "https://dev.backend.mobigarage.com/v1/mp/addresses",
//           formData,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setAddressId(response.data.id);
//       }
//       setFormData({
//         name: "",
//         mobile_no: "",
//         postal_code: "",
//         address_line1: "",
//         address_line2: "",
//         landmark: "",
//         city: "",
//         state: "",
//         country: "India",
//         is_default: false,
//       });
//       setIsReviewing(false);
//     } catch (error) {
//       console.error("Error saving address:", error);
//     }
//   };

//   const handleEdit = () => {
//     setIsReviewing(false);
//   };

//   const handleDelete = async () => {
//     if (!addressId) return;
//     try {
//       await axios.delete(
//         `https://dev.backend.mobigarage.com/v1/mp/addresses/${addressId}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setFormData({
//         name: "",
//         mobile_no: "",
//         postal_code: "",
//         address_line1: "",
//         address_line2: "",
//         landmark: "",
//         city: "",
//         state: "",
//         country: "India",
//         is_default: false,
//       });
//       setAddressId(null);
//       setIsReviewing(false);
//     } catch (error) {
//       console.error("Error deleting address:", error);
//     }
//   };

//   return (
//     <>
//       <img src={backButton} alt="Back" className={classes.backButton} />
//       {isReviewing ? (
//         <AddressReview
//           formData={formData}
//           onEdit={handleEdit}
//           onConfirm={handleConfirm}
//         />
//       ) : (
//         <form onSubmit={handleSubmit} className={classes.addressForm}>
//           <div className={classes.formHeader}>
//             <h3>{addressId ? "Edit Address" : "Add Address"}</h3>
//           </div>

//           <div className={classes.formGroup}>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder=" "
//               className={classes.formInput}
//             />
//             <label htmlFor="name" className={classes.label}>
//               Full Name (First and Last name)
//             </label>
//           </div>

//           <div className={classes.formGroup}>
//             <input
//               type="text"
//               id="mobile_no"
//               name="mobile_no"
//               value={formData.mobile_no}
//               onChange={handleChange}
//               required
//               placeholder=" "
//               className={classes.formInput}
//             />
//             <label htmlFor="mobile_no" className={classes.label}>
//               Phone Number*
//             </label>
//           </div>

//           <p className={classes.helpText}>May be used to assist delivery</p>
//           <button type="button" className={classes.useLocationBtn}>
//             Use my location
//           </button>

//           <div className={classes.formGroup}>
//             <input
//               type="text"
//               id="address_line1"
//               name="address_line1"
//               value={formData.address_line1}
//               onChange={handleChange}
//               required
//               placeholder=" "
//               className={classes.formInput}
//             />
//             <label htmlFor="address_line1" className={classes.label}>
//               Flat, House no, Building, Company
//             </label>
//           </div>

//           <div className={classes.formGroup}>
//             <input
//               type="text"
//               id="address_line2"
//               name="address_line2"
//               value={formData.address_line2}
//               onChange={handleChange}
//               placeholder=" "
//               className={classes.formInput}
//             />
//             <label htmlFor="address_line2" className={classes.label}>
//               Area, Street, Sector, Village
//             </label>
//           </div>

//           <div className={classes.formGroup}>
//             <input
//               type="text"
//               id="landmark"
//               name="landmark"
//               value={formData.landmark}
//               onChange={handleChange}
//               placeholder=" "
//               className={classes.formInput}
//             />
//             <label htmlFor="landmark" className={classes.label}>
//               Landmark
//             </label>
//           </div>

//           <div className={classes.formGroup}>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               required
//               placeholder=" "
//               className={classes.formInput}
//             />
//             <label htmlFor="city" className={classes.label}>
//               Town/City
//             </label>
//           </div>

//           <div className={classes.formGroup}>
//             <input
//               type="text"
//               id="postal_code"
//               name="postal_code"
//               value={formData.postal_code}
//               onChange={handleChange}
//               required
//               placeholder=" "
//               className={classes.formInput}
//             />
//             <label htmlFor="postal_code" className={classes.label}>
//               Pincode
//             </label>
//           </div>

//           <div className={classes.formGroup}>
//             <input
//               type="text"
//               id="state"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               required
//               placeholder=" "
//               className={classes.formInput}
//             />
//             <label htmlFor="state" className={classes.label}>
//               State
//             </label>
//           </div>

//           <div className={classes.formGroup}>
//             <label>
//               <input
//                 type="checkbox"
//                 name="is_default"
//                 checked={formData.is_default}
//                 onChange={handleChange}
//               />
//               Make this my default address
//             </label>
//           </div>

//           <button type="submit" className={classes.submitBtn}>
//             {addressId ? "Update" : "Save"}
//           </button>
//           {addressId && (
//             <button
//               type="button"
//               onClick={handleDelete}
//               className={classes.deleteBtn}
//             >
//               Delete
//             </button>
//           )}
//         </form>
//       )}
//     </>
//   );
// };

// export default AddressForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
import backButton from "./assets/arrow-left.svg";
import classes from "./addressForm.module.css";
import AddressReview from "./AddressReview";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile_no: "",
    postal_code: "",
    address_line1: "",
    address_line2: "",
    landmark: "",
    city: "",
    state: "",
    country: "India",
    is_default: false,
  });
  const [isReviewing, setIsReviewing] = useState(false);
  const [addressId, setAddressId] = useState(null);
  const token = "YOUR_TOKEN_HERE";

  // Fetch address only if addressId is null (on initial load)
  useEffect(() => {
    if (!addressId) {
      const fetchAddress = async () => {
        try {
          const response = await axios.get(
            "https://dev.backend.mobigarage.com/v1/mp/addresses",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          if (response.data.length > 0) {
            const addressData = response.data[0];
            setFormData(addressData);
            setAddressId(addressData.id);
          }
        } catch (error) {
          console.error("Error fetching address:", error);
        }
      };
      fetchAddress();
    }
  }, [addressId, token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsReviewing(true);
  };

  const handleConfirm = async () => {
    try {
      if (addressId) {
        await axios.put(
          `https://dev.backend.mobigarage.com/v1/mp/addresses/${addressId}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        const response = await axios.post(
          "https://dev.backend.mobigarage.com/v1/mp/addresses",
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAddressId(response.data.id);
      }
      setFormData({
        name: "",
        mobile_no: "",
        postal_code: "",
        address_line1: "",
        address_line2: "",
        landmark: "",
        city: "",
        state: "",
        country: "India",
        is_default: false,
      });
      setIsReviewing(false);
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  const handleEdit = () => {
    setIsReviewing(false);
  };

  const handleDelete = async () => {
    if (!addressId) return;
    try {
      await axios.delete(
        `https://dev.backend.mobigarage.com/v1/mp/addresses/${addressId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setFormData({
        name: "",
        mobile_no: "",
        postal_code: "",
        address_line1: "",
        address_line2: "",
        landmark: "",
        city: "",
        state: "",
        country: "India",
        is_default: false,
      });
      setAddressId(null);
      setIsReviewing(false);
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  return (
    <>
      <img src={backButton} alt="Back" className={classes.backButton} />
      {isReviewing ? (
        <AddressReview
          formData={formData}
          onEdit={handleEdit}
          onConfirm={handleConfirm}
        />
      ) : (
        <form onSubmit={handleSubmit} className={classes.addressForm}>
          <div className={classes.formHeader}>
            <h3>{addressId ? "Edit Address" : "Add Address"}</h3>
          </div>
          <div className={classes.formGroup}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className={classes.formInput}
            />
            <label htmlFor="name" className={classes.label}>
              Full Name (First and Last name)
            </label>
          </div>

          <div className={classes.formGroup}>
            <input
              type="text"
              id="mobile_no"
              name="mobile_no"
              value={formData.mobile_no}
              onChange={handleChange}
              required
              placeholder=" "
              className={classes.formInput}
            />
            <label htmlFor="mobile_no" className={classes.label}>
              Phone Number*
            </label>
          </div>

          <p className={classes.helpText}>May be used to assist delivery</p>
          <button type="button" className={classes.useLocationBtn}>
            Use my location
          </button>
          <div className={classes.formGroup}>
            <input
              type="text"
              id="address_line1"
              name="address_line1"
              value={formData.address_line1}
              onChange={handleChange}
              required
              placeholder=" "
              className={classes.formInput}
            />
            <label htmlFor="address_line1" className={classes.label}>
              Flat, House no, Building, Company
            </label>
          </div>

          <div className={classes.formGroup}>
            <input
              type="text"
              id="address_line2"
              name="address_line2"
              value={formData.address_line2}
              onChange={handleChange}
              placeholder=" "
              className={classes.formInput}
            />
            <label htmlFor="address_line2" className={classes.label}>
              Area, Street, Sector, Village
            </label>
          </div>

          <div className={classes.formGroup}>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              placeholder=" "
              className={classes.formInput}
            />
            <label htmlFor="landmark" className={classes.label}>
              Landmark
            </label>
          </div>

          <div className={classes.formGroup}>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder=" "
              className={classes.formInput}
            />
            <label htmlFor="city" className={classes.label}>
              Town/City
            </label>
          </div>

          <div className={classes.formGroup}>
            <input
              type="text"
              id="postal_code"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              required
              placeholder=" "
              className={classes.formInput}
            />
            <label htmlFor="postal_code" className={classes.label}>
              Pincode
            </label>
          </div>

          <div className={classes.formGroup}>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              placeholder=" "
              className={classes.formInput}
            />
            <label htmlFor="state" className={classes.label}>
              State
            </label>
          </div>

          <div className={classes.formGroup}>
            <label>
              <input
                type="checkbox"
                name="is_default"
                checked={formData.is_default}
                onChange={handleChange}
              />
              Make this my default address
            </label>
          </div>

          <button type="submit" className={classes.submitBtn}>
            {addressId ? "Update" : "Save"}
          </button>
          {addressId && (
            <button
              type="button"
              onClick={handleDelete}
              className={classes.deleteBtn}
            >
              Delete
            </button>
          )}
        </form>
      )}
    </>
  );
};

export default AddressForm;

import React, { useState } from "react";
import backIcon from "./assets/arrow-left.svg";
import classes from "./addressButton.module.css";
import AddressForm from "./AddressForm";
import icon from "../assests/forward icon.png"; // Fixed asset path

const AddressButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([]); // State to store addresses

  const handleAddAddressClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSaveAddress = (address) => {
    setAddresses((prevAddresses) => [...prevAddresses, address]);
    setShowForm(false); // Hide the form after saving
  };

  return (
    <>
      <img src={icon} alt="icon button" />
      {!showForm && (
        <div className={classes.containerAddress}>
          <h3>My Addresses</h3>
          <button
            className={`${classes.addressButton} ${classes.buttonWithIcon}`}
            onClick={handleAddAddressClick}
          >
            Add a New Address
            <img src={backIcon} alt="Back" className={classes.backButton} />
          </button>

          <button
            className={`${classes.findAddressButton} ${classes.buttonWithIcon}`}
          >
            Find a pickup location near you
            <img src={backIcon} alt="Back" className={classes.backButton} />
          </button>

          {/* Displaying the list of addresses */}
          <div className={classes.addressList}>
            {addresses.length === 0 ? (
              <p></p>
            ) : (
              addresses.map((address, index) => (
                <div key={index} className={classes.addressItem}>
                  <div>{address.fullName}</div>
                  <div>{address.mobileNumber}</div>
                  <div>{address.addressLine1}</div>
                  <div>{address.addressLine2}</div>
                  <div>{address.city}</div>
                  <div>{address.pincode}</div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {showForm && (
        <AddressForm onCancel={handleCancel} onSave={handleSaveAddress} />
      )}
    </>
  );
};
export default AddressButton;

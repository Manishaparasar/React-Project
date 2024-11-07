import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./cartReview.module.css";
import coupon from "./assets/coupons.svg";
import vector from "./assets/Vector.svg";

const CartReview = () => {
  const [cartData, setCartData] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [showCouponInput, setShowCouponInput] = useState(false); // Control input visibility

  const fetchData = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNSIsImV4cCI6MTczMDg4MDAzOH0.X3u2HD5ydzkbdxxwWUjBYMMhXCu4Cqq4Ld9dC7QY7fg";
    try {
      const response = await axios.get(
        "https://dev.backend.mobigarage.com/v1/mp/cart/review?address_id=57&coupon_code=6",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data?.data?.cart_items) {
        setCartData(response.data.data.cart_items);
      }
      if (response.data?.data?.applied_coupon_amount) {
        setCouponDiscount(response.data.data.applied_coupon_amount);
      }
      setAppliedCoupon(response.data?.data?.applied_coupon_code || "");
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const subtotal = cartData.reduce(
    (total, item) => total + item.original_price * (item.quantity || 1),
    0
  );

  const gstAmount = cartData.reduce(
    (total, item) => total + (item.gst_amount ? item.gst_amount : 100),
    0
  );

  const shippingFee = 50;
  const finalAmount = subtotal + gstAmount - couponDiscount;

  const handleCouponButtonClick = () => {
    setShowCouponInput(!showCouponInput);
  };

  return (
    <div className={classes.cartreview}>
      <h1>Item List</h1>
      {cartData.length > 0 ? (
        <div className={classes.main}>
          <ul>
            {cartData.map((item) => (
              <li key={item.id} className={classes.cartitem}>
                <img
                  src={item.image}
                  alt={`${item.brand || "Item"} ${item.model || ""}`}
                  className={classes.cartitemimage}
                />
                <div className={classes.cartitemdetails}>
                  <h5>
                    {item.brand || "Brand"} {item.model || "Model"}
                  </h5>
                  <p className={classes.cartValue}>
                    ({item.ram}/{item.rom},{item.color})
                  </p>
                  <p>
                    Rs {item.original_price.toFixed(2)}
                    <span className={classes.finalprice}>
                      Rs{" "}
                      {item.discounted_price.toFixed(2) ||
                        item.final_amount.toFixed(2)}
                    </span>
                  </p>
                  <p>Quantity: {item.quantity || 1}</p>

                  {/* <p>Stock Status: {item.stock_status}</p> */}
                </div>
                <div className={classes.discountContainer}>
                  <img
                    src={vector}
                    alt="discount"
                    className={classes.discountImage}
                  />
                  <span className={classes.discountText}>
                    {item.discount_percentage}%OFF
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <h2>Order Summary</h2>
            <div className={classes.couponsection}>
              {showCouponInput &&
                {
                  /* <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={appliedCoupon}
                  onChange={(e) => setAppliedCoupon(e.target.value)}
                /> */
                }}
              <button
                onClick={handleCouponButtonClick}
                className={classes.couponbutton}
              >
                <img
                  src={coupon}
                  alt="coupon icon"
                  className={classes.couponIcon}
                />
                <span className={classes.couponText}>
                  <p className={classes.couponText}> Coupon applied...</p>
                  <p className={classes.couponText}>{appliedCoupon}</p>
                </span>
              </button>
            </div>
            <br />
            <div className={classes.box}>
              <h3 className={classes.head}>Bill Details</h3>
              <p className={classes.summary}>
                Subtotal:
                <span>Rs {subtotal.toFixed(2)}</span>
              </p>
              <p className={classes.summary}>
                Coupon Saving:
                <span className={classes.coupon}>
                  -Rs {couponDiscount.toFixed(2)}
                </span>
              </p>
              <p className={classes.summary}>
                GST:
                <span>Rs {gstAmount.toFixed(2)}</span>
              </p>
              <p className={classes.summary}>
                Shipping Fee:
                <span>Rs {shippingFee.toFixed(2)}</span>
              </p>
              <br />
              <p className={`${classes.summary} ${classes.finalPrice}`}>
                Grand Total:
                <span className={classes.last}>
                  Rs {(finalAmount + shippingFee).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button className={classes.finalButton}>Place Order</button>
    </div>
  );
};

export default CartReview;

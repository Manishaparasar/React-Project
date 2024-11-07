import React from "react";

const CouponReview = ({
  classes,
  subtotal,
  discount,
  gstAmount,
  finalAmount,
  shippingFee = 50,
  cartData,
}) => {
  return (
    <div>
      {cartData.length > 0 ? (
        <div className={classes.ordersummary}>
          <h2>Order Summary</h2>
          <p>
            <strong className={classes.summary}>Subtotal:</strong> Rs
            {subtotal.toFixed(2)}
          </p>
          <p>
            <strong>Coupon Saving</strong> -Rs{discount.toFixed(2)} (
            {cartData[0].applied_coupon_code})
          </p>
          <p>
            <strong className={classes.summary}>Gst:</strong> Rs
            {gstAmount.toFixed(2)}
          </p>
          <p>
            <strong>Shipping Fee:</strong> Rs{shippingFee.toFixed(2)}
          </p>
          <p>
            <strong>Grand Total:</strong> Rs
            {(finalAmount + shippingFee).toFixed(2)}
          </p>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CouponReview;

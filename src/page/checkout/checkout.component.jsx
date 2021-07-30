import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  cartItemsPrice,
} from "../../redux/cart/cart.selector";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartTotal, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <div>{cartItem.name}</div>
    ))}
    <div className="total">
      <span>Rs {cartTotal}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: cartItemsPrice,
});

export default connect(mapStateToProps)(CheckoutPage);

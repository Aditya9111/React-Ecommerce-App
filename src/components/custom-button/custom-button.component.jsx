import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProp }) => (
  <button
    className={`${inverted ? "inverted" : ""} 
    ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProp}
  >
    {children}
  </button>
);

export default CustomButton;

import React from "react";

import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/sign-up/signup.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;

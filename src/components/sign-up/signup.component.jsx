import React from "react";

import "./signup.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title"> Don't have a account</h2>
        <span>Sign Up</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleChange}
            type="text"
            name="displayName"
            value={displayName}
            lable="Name"
            required
          />
          <FormInput
            onChange={this.handleChange}
            type="text"
            name="email"
            value={email}
            lable="Email"
            required
          />
          <FormInput
            onChange={this.handleChange}
            type="password"
            name="password"
            value={password}
            lable="Password"
            required
          />
          <FormInput
            onChange={this.handleChange}
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            lable="Confirm Password"
            required
          />

          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;

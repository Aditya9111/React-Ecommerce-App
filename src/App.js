import React from "react";
import "./App.css";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { Route, Switch } from "react-router-dom";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";
import Header from "./components/header/header-component";
import SignInAndSignUpPage from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) =>
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          })
        );
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route component={ShopPage} path="/shop" />
          <Route component={SignInAndSignUpPage} path="/signin" />
        </Switch>
      </div>
    );
  }
}

export default App;

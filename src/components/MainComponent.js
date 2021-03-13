import React, { Component } from "react";
import Header from "./HeaderComponent";
import Directory from "./DirectoryComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { CAMPSITES } from "../shared/campsites";
import CampsiteInfo from "./CampsiteInfoComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
        </Switch>
          <Redirect to='/home' />
        <Footer />
      </div>
    );
  }
}

export default Main;

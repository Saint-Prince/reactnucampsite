import React, { Component } from "react";
import  Header from './HeaderComponent';
import Directory from "./DirectoryComponent";
import Footer from './FooterComponent';
import { CAMPSITES } from "../shared/campsites";
import CampsiteInfo from "./CampsiteInfoComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      selectedCampsite: null
    };
  }

  onCampsiteSelect(campsite) {
    this.setState({ selectedCampsite: campsite });
  }

  render() {
    return (
      <div>
        <Header />
        <Directory
          campsites={this.state.campsites}
          onClick={campsiteId => this.onCampsiteSelect(campsiteId)}
        />
        <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;

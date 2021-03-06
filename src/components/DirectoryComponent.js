import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import CampsiteInfo from "./CampsiteInfoComponent";

class Directory extends Component {
  constructor(props) {
    //Props is mandatory for Classes using contstructors
    super(props);
    //The constructor is the only place where you can assign a value to the state
    this.state = {
      selectedCampsite: null,
    };
  }
  //Below changes state when called
  onCampsiteSelect(campsite) {
    //Do not directly change states in react do it this way instead->
    this.setState({ selectedCampsite: campsite });
  }

  render() {
    const directory = this.props.campsites.map((campsite) => {
      return (
        <div key={campsite.id} className="col-md-5 m-1">
          <Card onClick={() => this.onCampsiteSelect(campsite)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{directory}</div>
        <CampsiteInfo campsite={this.state.selectedCampsite} />
      </div>
    );
  }
}

export default Directory;

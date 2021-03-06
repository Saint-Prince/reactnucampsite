import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
  constructor(props) {
    //Props is mandatory for Classes using contstructors
    super(props);
    //The constructor is the only place where you can assign a value to the state
    this.state = {
        selectedCampsite: null
    };
  }
    //Below changes state when called
    onCampsiteSelect(campsite) {
        //Do not directly change states in react do it this way instead->
        this.setState({selectedCampsite: campsite});
    }

    //Renders what the user sees when campsite is clicked
    renderSelectedCampsite(campsite) {
      if (campsite) {
        return (
          <Card>
            <CardImg top src={campsite.image} alt={campsite.name} />
            <CardBody>
              <CardTitle>{campsite.name}</CardTitle>
              <CardText>{campsite.description}</CardText>
            </CardBody>
          </Card>
        );
      }
      //Returns empty if campsite is null -Makes sense since this will fire often?
      return  <div/>;
    }

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
              <div key={campsite.id} className="col-md-5 m-1">
                <Card onClick={() => this.onCampsiteSelect(campsite)}>
                  <CardImg
                    width="100%"
                    src={campsite.image}
                    alt={campsite.name}
                  />
                  <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="col-md-5 m-1">
                  {this.renderSelectedCampsite(this.state.selectedCampsite)}
                </div>
            </div>
        );
    }
}


export default Directory;

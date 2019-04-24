import React, { Component } from 'react';
import './App.css';
import 'bootstrap';
import CarlistComponent from "./component/carlist.component";
import Image from "./component/image.component";

const data = {

  "cars": [
    {
      "make": "Audi",
      "model": "R8",
      "id": 0,
      "image": "./img/audi_r8.jpg",

    },
    {
      "make": "BMW",
      "model": "M3",
      "id": 1,
      "image": "./img/bentley.jpg",
    },
    {
      "make": "Mercedes-Benz",
      "model": "C63",
      "id": 2,
      "image": "./img/porsche_cayman.jpg",
    },
  ]
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "",
    }
  }


  updatedOrder = (selectedOrder) => {
    this.setState({selectedId: selectedOrder})
  }

  render() {



    return (
      <div className="App">
        <p>How to make a cake</p>
        <div className="container container_plus">
          <div className="row">
            <div className="col-sm">
              <CarlistComponent items={ data } triggerOrderUpdate={ this.updatedOrder }/>
            </div>
            <div className="col-sm">
              <Image source={ data } id={this.state.selectedId} triggerOrderUpdate={ this.updatedOrder }/>
            </div>
            <div className="col-sm">
              One of three columns
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

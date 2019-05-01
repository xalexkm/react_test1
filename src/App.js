import React, { Component } from 'react';
import './App.css';
import 'bootstrap';
import {CarlistComponent} from "./component/carlist.component";
import Image from "./component/image.component";
import audi from "./img/audi_r8.jpg";
import bmw_m3 from "./img/bmw_m3.jpeg";
import mercedes from "./img/porsche_cayman.jpg";
import {SearchBar} from "./component/search.component";
const data =
  [
    {
      "make": "Audi",
      "model": "R8",
      "id": 0,
      "image": audi,
    },
    {
      "make": "BMW",
      "model": "M3",
      "id": 1,
      "image": bmw_m3,
    },
    {
      "make": "Mercedes-Benz",
      "model": "C63",
      "id": 2,
      "image": mercedes,
    },
  ];




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: 0,
      filteredCars: data,
    }
  }


  updatedOrder = (selectedOrder) => {

        this.setState({ selectedId: selectedOrder});
  };

  updatedSearch = (filteredCarsIds) => {

        this.setState({filteredCars: filteredCarsIds});
        console.log(this.state.filteredCars);
  };

  render() {



    return (
      <div className="App">
        <p>How to make a cake</p>
        <div className="container container_plus">
          <div className="row">
            <div className="col-sm">
              <SearchBar data={ data } triggerSearchUpdate={ this.updatedSearch }/>
              <CarlistComponent items={ this.state.filteredCars } triggerOrderUpdate={ this.updatedOrder } />
            </div>
            <div className="col-sm">
              <Image source={ data } id={this.state.selectedId}/>
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

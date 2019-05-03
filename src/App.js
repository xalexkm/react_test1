

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
      searchValue: "",

    };

  }


  updatedOrder = (selectedOrder) => {

        this.setState({ selectedId: selectedOrder});
  };

  updatedSearch = (inputValue) => {

        this.setState({searchValue: inputValue});
        console.log(this.state.searchValue);

  };


  render() {



    return (
      <div className="App">
          <div className="web_header">
              <div className="item"> ABOUT
                  <div className="item_underline"> </div>
              </div>
              <div className="item"> GALLERY
                  <div className="item_underline"> </div>
              </div>
              <div className="item"> RANDOM
                  <div className="item_underline"> </div>
              </div>
              <div className="item"> SINISTER
                  <div className="item_underline"> </div>
              </div>
          </div>
          <div className="container container_plus">

          <div className="row car_app">
            <div className="col-sm-3">
              <SearchBar data={ data } triggerSearchUpdate={ this.updatedSearch } />
              <CarlistComponent items={ data } source={ data } searchValue={ this.state.searchValue } triggerOrderUpdate={ this.updatedOrder }/>
            </div>
            <div className="col-sm-3">
              <Image source={ data } id={this.state.selectedId}/>
            </div>
            <div className="col-sm-6">
              One of three columns
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

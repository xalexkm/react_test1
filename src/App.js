import React, { Component } from 'react';
import './App.css';
import cake1 from './cake1.jpg';
import TestComponent from "./component/test.component";
import CarlistComponent from "./component/carlist.component";




class App extends Component {
  render() {
    return (
      <div className="App">
        <p>How to make a cake</p>
        <div className="container container_plus">
          <div className="row">
            <div className="col-sm">
              <CarlistComponent></CarlistComponent>
            </div>
            <div className="col-sm">
              <img className="image_box mt-5" src={cake1} alt="Cake"/>
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

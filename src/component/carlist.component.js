import React, { Component } from "react"



class CarlistComponent extends Component {


    constructor() {
        super();
        this.state = {
            cakes: ["Cake with ham","Cheesecake","Healthy Cake","Wedding Cake"]
        };
    }



    render() {
        return (
            <ul className="list-group" >
                {this.state.cakes.map(function (value) {
                        return(
                            <li className="list-group-item" onClick={}>{ value }</li>
                        );
                })}
            </ul>
        )
    }
}

export default CarlistComponent;
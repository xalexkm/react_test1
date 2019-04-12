import React, { Component } from "react"



class CarlistComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            cakes: ["1", "2", "3", "4"],
        };
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass = () => {
        const currentState = this.state.isActive;
        this.setState({isActive: !currentState});
    }

    render() {
        let me = this;
        return (
            <ul className="list-group" >
                {
                    this.state.cakes.map(function (value) {
                        return(
                            <li onClick={ me.toggleClass } className={ this.state.isActive ? 'list-group-item active' : 'list-group-item' } >{ value }</li>
                        );
                    })
                }
            </ul>
        )
    }


}


export default CarlistComponent;
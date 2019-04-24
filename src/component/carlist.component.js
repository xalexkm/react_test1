import React, { Component } from "react";

class CarlistComponent extends Component {

    constructor(props) {
        super(props);
        this.selectCar = this.selectCar.bind(this);
        this.state = {
            selectedId: 0,
        }
    }

    selectCar = (item) => {
        let me = this;
        if (me.state.selectedId !== item.id) {
            me.setState({selectedId : item.id})
        }
        this.props.triggerOrderUpdate(this.state.selectedId);
    }

    render() {
        return (

            <ul className="list-group" >
                {
                    this.props.items.cars.map(
                        item => {
                            let me = this;
                            return(
                            <li
                                key={item.id}
                                className={(this.state.selectedId === item.id) ? 'list-group-item active' : 'list-group-item'}
                                onClick={() => me.selectCar(item)}>

                                {item.make} - {item.model}

                            </li>
                            )
                        }
                    )
                }
            </ul>
        )
    }


}


export default CarlistComponent;
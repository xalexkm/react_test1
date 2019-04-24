import React, { Component } from "react";

class CarlistComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedId: 0,
        }
    }

    selectCar = (id, item) => {
        let me = this;
        if (this.state.selectedId !== id) {
            me.setState({selectedId : item.id})
        }

    }

    handleEvent = () => {
        this.props.triggerOrderUpdate(this.state.selectedId);
    }

    render() {
        let selectCar = this.selectCar.bind(this);
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
                                onClick={function (e) {
                                    selectCar(item.id, item);
                                    me.handleEvent()
                                }}>

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
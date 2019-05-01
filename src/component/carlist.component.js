import React, { Component } from "react";

export class CarlistComponent extends Component {

    constructor(props) {
        super(props);
        this.selectCar = this.selectCar.bind(this);
        this.state = {
            selectedId: 0,
        }
    }

    selectCar = (id) => {
        let me = this;
        if (me.state.selectedId !== id) {
            me.setState({selectedId : id});
            // sends id of the selected item
            me.props.triggerOrderUpdate(id);
        }



    }

    render() {
        return (

            <ul className="list-group" >
                {
                    this.props.items.map(
                        item => {
                            let me = this;
                            return(
                            <li
                                key={item.id}
                                className={(this.state.selectedId === item.id) ? 'list-group-item active' : 'list-group-item'}
                                onClick={() => me.selectCar(item.id)}>

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


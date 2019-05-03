import React, { Component } from "react";

export class CarlistComponent extends Component {

    constructor(props) {
        super(props);
        this.selectCar = this.selectCar.bind(this);
        this.state = {
            selectedId: 0,
            filteredCars: [],
            searchValue: "",
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



    filterCars = () => {
        if (this.state.searchValue !== "") {
            let searchValue = this.props.searchValue;
            let source = this.props.source;
            source.map(car => {
                    if (car.make.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
                        source.splice(car.id, 1);

                    }
                    return null;
                }
            );
            this.setState({filteredCars: source});
            console.log(this.state.filteredCars);
        }
    }


    render() {
        this.filterCars();
        return (

            <ul className="list-group" >
                {

                    this.state.filteredCars.map(
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


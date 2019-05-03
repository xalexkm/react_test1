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



    filterCars = (event) => {
        this.setState({searchValue: event.target.value});
        console.log(this.state.searchValue);
        if (this.state.searchValue !== "") {
            let searchValue = this.state.searchValue;
            let source = this.props.source;


            for (let i = 0; i < source.length; i++) {
                if (source[i].make.toLowerCase().indexOf( searchValue.toLowerCase() ) === -1) {
                    console.log(source[i].id);
                    source.splice(source[i].id, 1);
                }
            }
            this.setState({filteredCars: source});
            console.log(this.state.filteredCars);
        }
    }


    render() {

        return (
            <React.Fragment>
            <form>
                <input placeholder="Search for a car..." name="search_bar" value={ this.state.searchValue } onChange={ this.filterCars }  className="mb-2"/>
            </form>

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
            </React.Fragment>
        )
    }


}


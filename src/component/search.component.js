import React, {Component} from "react";

export class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            filteredCars: [],
        }

    }



    handleSearch = (event) => {

        this.setState({searchValue: event.target.value});
        let beforeFilteredCars = this.props.data;
        this.props.data.map(
            car => {
                let me = this;
                let currentInput = me.state.searchValue;
                if (currentInput !== "" && (car.model.toLowerCase().indexOf( currentInput.toLowerCase()) === -1 || car.make.toLowerCase().indexOf( currentInput.toLowerCase()) === -1)) {
                    beforeFilteredCars.splice(car.id, 1);
                }
                return undefined;
            }

        );
        this.props.triggerSearchUpdate(beforeFilteredCars);
}


    render() {
        return(

            <form>
                <input placeholder="Search for a car..." name="search_bar" value={ this.state.searchValue } onChange={ this.handleSearch }/>
            </form>

        );
    }

}

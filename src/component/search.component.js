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
        let beforeFilteredCars = [];
        let currentInput = event.target.value;

        this.props.data.map(
            car => {
                let me = this;
                
                console.log(currentInput);
                if (car.model.toLowerCase().indexOf( currentInput.toLowerCase()) !== -1) {
                    beforeFilteredCars.push(car.id);
                }
                return undefined;
            }

        );
        this.setState({searchValue: event.target.value});
        this.props.triggerSearchUpdate(beforeFilteredCars);
}


    render() {
        return(

            <form>
                <input placeholder="Search for a car..." name="search_bar" value={ this.state.searchValue } onChange={ this.handleSearch }  className="mb-2"/>
            </form>

        );
    }

}

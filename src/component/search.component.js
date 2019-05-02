import React, {Component} from "react";

export class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
        }

    }



    callbackSearchValue = (event) => {
        this.setState({searchValue: event.target.value});
        this.props.triggerSearchUpdate(this.state.searchValue);
}


    render() {
        return(

            <form>
                <input placeholder="Search for a car..." name="search_bar" value={ this.state.searchValue } onChange={ this.callbackSearchValue }  className="mb-2"/>
            </form>

        );
    }

}

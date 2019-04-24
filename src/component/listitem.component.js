import React, { Component } from "react";

class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    selectItem() {

    }

    render() {

        return(
            <li onClick={ this.selectItem } className={ this.state.isActive ? 'list-group-item active' : 'list-group-item' } >{ this.props.value }</li>
        );

    }



}

export default ListItem;
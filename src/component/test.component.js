import React, { Component } from "react";


class TestComponent extends Component {

    constructor() {
        super();
        this.state = {
            count: 1
        };

        this.hersgori = this.hersgori.bind(this);
    }

    hersgori() {
        this.setState({
            count: this.state.count + 1
        });
    }


    render() {
        return (
            <div className="c-test" onClick={this.hersgori}>
                TEST COMPONENT {this.data} {this.props.car} - {this.state.count}
            </div>
        );
    }
}

export default TestComponent;
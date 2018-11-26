import React, { Component } from 'react';

class Display extends Component {

    render() {
        return (
            <div>
                <h3>Hi {this.props.firstName} {this.props.lastName}!</h3>
                <h3>You are {this.props.age} years old.</h3>
            </div>
        );
    }
}

export default Display;
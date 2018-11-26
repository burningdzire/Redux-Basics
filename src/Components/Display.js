import React, { Component } from 'react';

class Display extends Component {

    formatName(newFirstName, newLastName) {
        return newFirstName + " " + newLastName;
    }
    render() {
        return (
            <div>
                <h3>Your name is {this.formatName(this.props.firstName, this.props.lastName)}</h3>
            </div>
        );
    }
}

export default Display;
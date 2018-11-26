import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h1>This is main page.</h1>
                </div>
                <div className="row">
                    <button className="btn btn-primary" onClick={() => this.props.changeName("Rohit", "Saxena")}>Change Name</button>
                </div>
            </div>
        );
    }
}

export default Main;
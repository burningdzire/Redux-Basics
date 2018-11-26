import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h1>Main Page</h1>
                </div>
                <div className="row">
                    <button className="btn btn-primary"
                        onClick={() => this.props.changeFirstName()}>Change Name</button>
                    <button className="btn btn-primary"
                        onClick={() => this.props.changeLastName()}>Change Name</button>
                    <button className="btn btn-primary"
                        onClick={() => this.props.changeAge()}>Change Age</button>
                </div>
            </div>
        );
    }
}

export default Main;
import React, { Component } from 'react';
import Main from './Components/Main'
import Display from './Components/Display'

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Mohit",
      lastName: "Sharma"
    }
  }

  changeUserName(newFirstName, newLastName) {
    this.setState({ 
      firstName: newFirstName, 
      lastName: newLastName
    });
  }

  render() {
    return (
      <div className="App">
        <Main changeName={this.changeUserName.bind(this)} />
        <Display firstName={this.state.firstName} lastName={this.state.lastName}/>
      </div>
    );
  }
}

export default App;

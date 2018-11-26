import React, { Component } from 'react';
import { Main } from '../Components/Main'
import { Display } from '../Components/Display'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main
          changeFirstName={() => this.props.setFirstName("Rohit")}
          changeLastName={() => this.props.setLastName("Saxena")}
          changeAge={() => this.props.setAge(22)} />
        <Display
          firstName={this.props.user.firstName}
          lastName={this.props.user.lastName}
          age={this.props.user.age} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFirstName: (newFirstName) => {
      dispatch({
        type: "CHANGE_FIRST_NAME",
        payload: newFirstName
      });
    },
    setLastName: (newLastName) => {
      dispatch({
        type: "CHANGE_LAST_NAME",
        payload: newLastName
      });
    },
    setAge: (newAge) => {
      dispatch({
        type: "CHANGE_AGE",
        payload: newAge
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

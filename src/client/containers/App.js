import React, { Component } from 'react';
import { Main } from '../components/Main'
import { Display } from '../components/Display'
import { connect } from 'react-redux';
import { changeFirstName, changeLastName, changeAge } from "../store/actions/userActions";

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
      dispatch(changeFirstName(newFirstName));
    },
    setLastName: (newLastName) => {
      dispatch(changeLastName(newLastName));
    },
    setAge: (newAge) => {
      dispatch(changeAge(newAge));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

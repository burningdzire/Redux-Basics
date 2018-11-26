// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import { createStore } from 'redux';

const initialState = {
    result: 1,
    lastValues: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload
            }
            break;
        case "MULTIPLY":
            state = {
                ...state,
                result: state.result * action.payload
            }
            break;
        case "DIVIDE":
            state = {
                ...state,
                result: state.result / action.payload
            }
            break;
        case "REMAINDER":
            state = {
                ...state,
                result: state.result % action.payload
            }
            break;
        default:
            break;
    }
    return state;
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log("Store Updated!!", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 10
});


store.dispatch({
    type: "SUBTRACT",
    payload: 7
});

serviceWorker.unregister();

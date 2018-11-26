import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
        state = state + action.payload;
            break;
        case "SUBTRACT":
        state = state - action.payload;
            break;
        default:
            break;
    }
    return state;
}

const store = createStore(reducer, 1);

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

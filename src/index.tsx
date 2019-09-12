import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

import counterReducer, { initialState } from './modules/Counter'
import * as serviceWorker from "./serviceWorker";
import "./index.css";
const store = createStore(counterReducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

// const initialState = {
//     fuga: 1
// }

// export default function reducer(state = initialState, action: any) {
//     switch(action.type) {
//         case 'INCREMENT':
//         default:
//         return state
//     }
// }

// const store = createStore(reducer)

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

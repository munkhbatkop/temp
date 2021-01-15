import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "./components/app";

import "./index.scss";

window.development = process.env.development; // assign mode to window properties to use it in another component like welcome.js

ReactDOM.render(<App/>, document.getElementById("app"));

if (module.hot) module.hot.accept(); // hot module replacement
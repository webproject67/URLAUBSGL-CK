import './sass/style.scss';
import svg from './svg';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

svg();

ReactDOM.render(<App />, document.querySelector(`#root`));
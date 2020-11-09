import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE } from "./data/COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE";

ReactDOM.render(
  <React.StrictMode>
    <App i={COLLECTION_OF_IDEAS_FROM_HACKATHON_PAE} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

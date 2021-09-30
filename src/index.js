import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);

const data = {
  laptop: [],
  phones: [],
};

const changeValue = (key, value) => {
  // this.setState(prev=> ({[key]:[...data[key], value ]})
  data[key] = [...data[key], value]
};

changeValue("laptop", { fghjk: "fghjk" });
changeValue("phones", { gfh: "fghjk" });

import React from "react";
import ReactDOM from "react-dom";

import "./loader.css";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;

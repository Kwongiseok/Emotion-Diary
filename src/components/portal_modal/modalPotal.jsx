import React from "react";
import ReactDOM from "react-dom";

const ModalPotal = ({ children }) => {
  const el = document.getElementById("modal");
  return ReactDOM.createPortal(children, el);
};

export default ModalPotal;

import React from "react";
import ReactDOM from "react-dom";

const ModalPotal = ({ children, onClose }) => {
  const el = document.getElementById("modal");
  el.addEventListener("click", () => {
    onClose();
  });
  return ReactDOM.createPortal(children, el);
};

export default ModalPotal;

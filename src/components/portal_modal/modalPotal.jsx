import { memo } from "react";
import ReactDOM from "react-dom";

const ModalPotal = memo(({ children }) => {
  const el = document.getElementById("modal");
  return ReactDOM.createPortal(children, el);
});

export default ModalPotal;

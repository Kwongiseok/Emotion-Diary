import React from "react";
import { useHistory } from "react-router-dom";

const PortalFooter = ({ authService, onClose }) => {
  const history = useHistory();
  const goToMaker = ({ user }) => {
    history.push({
      pathname: "/",
      state: {
        uid: user.uid, //
        displayName: user.uid,
        imageURL: user.imageURL,
      },
    });
    onClose();
  };
  const handleLogin = () => {
    authService.login().then((data) => goToMaker(data));
  };
  return (
    <div>
      <button onClick={handleLogin}>Google</button>
    </div>
  );
};

export default PortalFooter;

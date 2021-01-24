import React from "react";
import { useHistory } from "react-router-dom";

const PortalFooter = ({ authService, onClose, loginSaveUid }) => {
  const history = useHistory();
  const loginSuccess = ({ user }) => {
    // loginSaveUid(user.uid);
    history.push({
      pathname: "/myDiaryPage",
      state: { id: user.uid },
    });
    console.log(user.uid);
    onClose();
  };
  const handleGoogleLogin = () => {
    authService.logIn().then((data) => loginSuccess(data));
  };
  return (
    <div>
      <button onClick={handleGoogleLogin}>Google</button>
    </div>
  );
};

export default PortalFooter;

import React from "react";

const PortalFooter = ({ authService, onClose, loginSaveUid }) => {
  const loginSuccess = ({ user }) => {
    loginSaveUid(user.uid);
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

import React from "react";

const PortalFooter = ({ authService }) => {
  const handleLogin = () => {
    authService.login();
  };
  return (
    <div>
      <button onClick={handleLogin}>Google</button>
    </div>
  );
};

export default PortalFooter;

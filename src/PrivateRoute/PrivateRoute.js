import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user } = useSelector((rootReducer) => rootReducer.userReducer);
  // console.log('user',user)
  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default PrivateRoute;

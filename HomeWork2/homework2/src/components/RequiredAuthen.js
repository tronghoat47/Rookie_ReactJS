import React from "react";
import { useAuthContext } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

const RequiredAuthen = (props) => {
  const { children } = props;
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default RequiredAuthen;

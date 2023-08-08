import React from "react";
import { Navigate } from "react-router-dom";

export const UserRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return !token ? element : <Navigate to="/todo" />;
};

export const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/signin" />;
};

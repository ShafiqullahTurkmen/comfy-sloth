import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, exact, ...rest }) => {
  const { user } = useAuth0();
  return <Route { ...rest } render={() => user ? children : <Redirect to="/" />}></Route>;
};
export default PrivateRoute;

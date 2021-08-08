import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Login, Register } from "../pages";

export const AuthRoutes = () => {
  return (
    <Fragment>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Fragment>
  );
};

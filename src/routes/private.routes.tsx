import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { Todo, Todos } from "../pages";
import { refreshProfile } from "../redux/auth/auth.async";
import { tokenSelector } from "../redux/auth/selector";
import { HttpService } from "../services";

export const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);

  HttpService.setToken(token);

  useEffect(() => {
    dispatch(refreshProfile());
  }, []);
  return (
    <Switch>
      <Route exact path="/" component={Todos} />
      <Route exact path="/:id" component={Todo} />
    </Switch>
  );
};

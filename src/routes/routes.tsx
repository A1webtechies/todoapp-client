import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import { Loading } from "../components";
import { Login, Register } from "../pages";

import { tokenSelector } from "../redux/auth/selector";
import { HttpService } from "../services";

import { PrivateRoutes } from "./private.routes";

export const Routes = () => {
  const token = useSelector(tokenSelector);
  Boolean(token) && HttpService.setToken(token);

  return (
    <Suspense fallback={<Loading loading={true} />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route
            render={(props: RouteComponentProps) =>
              Boolean(token) ? (
                <PrivateRoutes />
              ) : (
                <Redirect
                  to={{ pathname: "/login", state: { from: props.location } }}
                />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

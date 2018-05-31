import React, { SFC } from "react";
import { Route, Router } from "react-router";
import LoginPage from "./pages/LoginPage";
import OTPPage from "./pages/OTPPage";

export interface IFoodiRouterProps {
  history: History;
}

const FoodiRouter: SFC<IFoodiRouterProps> = ({ history }) => (
  <Router history={history}>
    <Route path="/" component={LoginPage} />
    <Route path="/otp" component={OTPPage} />
  </Router>
);

export default FoodiRouter as any;

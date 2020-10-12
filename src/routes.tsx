import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LadingPage from "./pages/LandingPage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LadingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

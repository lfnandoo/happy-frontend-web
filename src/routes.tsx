import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import OrphanagesMap from "./pages/OrphanagesMap";
import CreateOrphanage from "./pages/CreateOrphanage";
import Orphanage from "./pages/Orphanage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/app" exact component={OrphanagesMap} />
        <Route path="/orphanages/create" exact component={CreateOrphanage} />
        <Route path="/orphanages/:id" exact component={Orphanage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

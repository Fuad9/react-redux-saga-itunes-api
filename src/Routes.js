import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import RandomSearch from "./RandomSearch";

const Routes = () => {
   return (
      <>
         <Router>
            <Switch>
               <Route exact path="/react-redux-saga-itunes-api">
                  <Home />
               </Route>

               <Route path="/search">
                  <RandomSearch />
               </Route>
            </Switch>
         </Router>
      </>
   );
};

export default Routes;

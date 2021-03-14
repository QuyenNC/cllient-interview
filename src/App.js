import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import Content from './Containers/HomeContent';
import Detail from './Containers/DetailContent';
import MainRoute from './Routing/Route';
function App() {
  return (
    <Router>
      <Switch>
        <MainRoute exact path="/" component={Content} />
        <MainRoute exact path="/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;

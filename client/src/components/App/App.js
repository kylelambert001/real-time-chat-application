import React from "react";
import { Switch, Route } from "react-router-dom";
import Chat from "../Chat/Chat";
import Join from "../Join/Join";

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Join} />
      <Route exact path="/chat" component={Chat} />
    </Switch>
  );
};

export default App;

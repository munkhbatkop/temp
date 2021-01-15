import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

import "./app.scss";

import Welcome from "./views/welcome";
import Thanks from "./views/thanks";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id={"container"}>
          <header>
            <div>
              <Link to="/">Welcome</Link>
            </div>
            <div>
              <Link to="/thanks">Thanks</Link>
            </div>
          </header>

          <div id={"content"}>
            <Switch>
              <Route path="/thanks">
                <Thanks/>
              </Route>
              <Route path="/">
                <Welcome/>
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
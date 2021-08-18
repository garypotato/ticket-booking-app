import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home/Home"
import Query from "./Query/Query"
import Ticket from "./Ticket/Ticket"
import Order from "./Order/Order"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/query" component = {Query} />
          <Route path = "/ticket" component = {Ticket} />
          <Route path ="/order" component = {Order} />
          <Route path = "/" component = {Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

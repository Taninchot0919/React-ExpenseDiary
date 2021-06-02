import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import "./index.css";
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

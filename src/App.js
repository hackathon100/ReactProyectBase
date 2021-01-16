import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Home from "./pages/Home";
import Nav from "./componentes/Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

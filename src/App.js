import Header from "./Header";
import Content from "./Content";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Content} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/:id" component={ItemDetail} />
      </Switch>
    </Router>
  );
}

export default App;

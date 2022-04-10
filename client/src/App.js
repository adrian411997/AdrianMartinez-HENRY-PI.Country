import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={Home} />
      <Route
        exact
        path="/detail/:countryId"
        render={({ match }) => <Detail id={match.params.countryId} />}
      />
      <Route path="/home/create" component={Form} />
    </Switch>
  );
}

export default App;

import { Route, Switch } from "react-router";
import Login from "./containers/Login/Login";
import Support from "./containers/Support/Support";
import WelcomeScreen from "./containers/WelcomeScreen/WelcomeScreen";

const App = () => {
  return (
    <Switch>
      <Route path={"/support"}>
        <Support />
      </Route>
      <Route path={"/login"}>
        <Login />
      </Route>
      <Route path={"/"} exact>
        <WelcomeScreen />
      </Route>
    </Switch>
  );
};

export default App;

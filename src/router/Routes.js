import HomeDark from "../views/all-home-version/HomeDark";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeDark} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;


import {
  BrowserRouter as Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

// Import pages
import App from "../App";
import SKESystem from '../pages/SKESystem';
import SKECredential from '../pages/SKECredential';


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/ske_sys" component={SKESystem} />
        <Route exact path="/ske_credential" component={SKECredential} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

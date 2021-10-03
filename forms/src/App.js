import './App.css';
import Signin from "./form/signin"
import Login from "./form/login"
import Account from "./form/account"
import Contact from "./form/contact"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav >
          <ul className="table">
          <li>
              <Link to="/signin">Sign In</Link>
              </li>
            <li>
              <Link to="/login">Login</Link>
              </li>
            <li>
              <Link to="/account">Account</Link>
              </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </nav>

      <div className="container">
        <Switch>
          <Route path="/signin">
            <Signin />
            </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <Account />
            </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;

import './App.css';
import Signup from "./advanced-forms/signup";
import Signin from "./advanced-forms/signin";
import Account from "./advanced-forms/account";
import Contact from "./advanced-forms/contact";

import StandardSignin from "./standard-forms/signin";
import StandardLogin from "./standard-forms/login";
import StandardAccount from "./standard-forms/accout";
import StandardContact from "./standard-forms/contact";

import Collapsible from 'react-collapsible';

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
        <Collapsible trigger="Advanced Forms">
          <nav >
            <ul className="table">
              <li>
                <Link to="/signup">Sign Up</Link>
                </li>
              <li>
                <Link to="/signin">Sign In</Link>
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
          <Route path="/signup">
            <Signup />
            </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/account">
            <Account />
            </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          </Switch>
        </div>
        </Collapsible>

        <br />
        <hr />
        <br />

        <Collapsible trigger="Standard Forms" >
          <nav> 
              <ul className="table">
              <li>
                <Link to="/standard-signup">Sign Up</Link>
                </li>
              <li>
                <Link to="/standard-login">Sign In</Link>
                </li>
              <li>
                <Link to="/standard-account">Account</Link>
                </li>
              <li>
                <Link to="/standard-contact">Contact Me</Link>
              </li>
            </ul>
          </nav>

          <div className="container">
        <Switch>
          <Route path="/standard-signin">
            <StandardSignin />
            </Route>
          <Route path="/standard-login">
            <StandardLogin />
          </Route>
          <Route path="/standard-account">
            <StandardAccount />
            </Route>
          <Route path="/standard-contact">
            <StandardContact />
          </Route>
          </Switch>
        </div>
        </Collapsible>
       
      </div>
    </Router>
    </div>
  );
}

export default App;

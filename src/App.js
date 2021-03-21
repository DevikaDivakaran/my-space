import React from 'react';
import  HomePage from './pages/homepage/homepage.component';
import  SignUpPage from './pages/signuppage/signuppage';
import  SignInPage from './pages/signinpage/signinpage';

import {Route, Switch,  BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import'bootstrap/dist/css/bootstrap.css';
function App() {
  return (<Router>
   
          <Switch>
            <Route exact path='/' component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/Homepage" component={HomePage} />
          </Switch>
     </Router>
  );
}

export default App;


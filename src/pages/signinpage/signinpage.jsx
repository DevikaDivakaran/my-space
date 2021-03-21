import React from 'react';
import {Route} from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUpPage from '../../pages/signuppage/signuppage';

//import './signinpage.styles.scss';

const SignInPage = () => (
  <div className='sign-in'>
    <SignIn />
    
    <Route exact path='/signup' component={SignUpPage} />
  </div>
);

export default SignInPage;
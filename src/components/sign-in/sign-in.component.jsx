import React from 'react';

import {Link} from 'react-router-dom';
import { auth, signInWithFacebook, signInWithGoogle } from '../../firebase/firebase.utils';
//import './sign-in.scss';
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  

  render() {
    
    return (
      <div>
        
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">My Space</span>
          <span class="navbar-brand mb-0">Connect with your friends...</span>
      </nav>       
       <div className="d-flex justify-content-center"><h1>Login</h1></div>

      <div className="d-flex justify-content-center">
       
        <form onSubmit={this.handleSubmit}>
        
        <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div classname='btn' align="center" >
                <Link to='/homepage'>
          <button type="button" class="btn btn-outline-primary mr-1">Sign in</button>
                </Link>
                
                <button type="button" class="btn btn-outline-primary mr-1" onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</button>

                
            <button type="button" class="btn btn-outline-primary" onClick={signInWithFacebook} isFacebookSignIn>Sign in with Facebook</button>

            <div className='title'>Don't have a account?</div>
            <Link to='/signup'>
            <button type="button" class="btn btn-outline-primary">Sign Up</button>
            </Link>
            </div>
        </form>
     
      </div>
      </div>
    );
  }
}

export default SignIn;
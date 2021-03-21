import React from 'react';

import {Link} from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

//import './sign-up.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const onClick = () => {
      if(password!=confirmPassword){
        alert("password didn't match");
      }
    };
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">My Space</span>
      <span class="navbar-brand mb-0">Connect with your friends...</span>
  </nav>
        <div className="d-flex justify-content-center"><h1>Sign up here</h1></div>
      <div className="d-flex justify-content-center"> 
      
        
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          
        <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" required/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" required/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" required />
                </div>

            <Link to='/'>
            <button type="button" class="btn btn-outline-primary" onclick={onClick()}>Sign Up</button>
            </Link>       
             </form>
      </div>
      </div>
    );
  }
}

export default SignUp;
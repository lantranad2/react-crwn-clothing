import { Component } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

import { signInWithGoogle, auth } from '../firebase/firebase.utils';
import './Sign.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  _handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  _handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log('error signing in with email and password');
    }
  };

  render() {
    return (
      <div className="Sign SignIn">
        <h2 className="Sign__heading">I already have an account</h2>
        <p className="Sign__subheading">
          Sign in with your email and password.
        </p>
        <form className="Sign__form" onSubmit={this._handleSubmit}>
          <FormInput
            label="Email"
            handleChange={this._handleChange}
            value={this.state.email}
            name="email"
            type="email"
            required
          />
          <FormInput
            label="Password"
            handleChange={this._handleChange}
            value={this.state.password}
            name="password"
            type="password"
            required
          />
          <div className="Sign__buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} googleButton>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

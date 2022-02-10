import { Component } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import './Sign.scss';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
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
    const { displayName, email, password, confirmPassword } = this.state;
    // Validation: (simple version)
    // check confirmPassword
    if (password !== confirmPassword) {
      console.log("Password doesn't not match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log('error signing up a user', error.message);
    }
  };

  render() {
    return (
      <div className="Sign SignUp">
        <h2 className="Sign__heading">I already have an account</h2>
        <p className="Sign__subheading">
          Sign in with your email and password.
        </p>
        <form className="Sign__form" onSubmit={this._handleSubmit}>
          <FormInput
            label="Display Name"
            handleChange={this._handleChange}
            value={this.state.displayName}
            name="displayName"
            type="text"
            required
          />
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
          <FormInput
            label="ConFirm Password"
            handleChange={this._handleChange}
            value={this.state.confirmPassword}
            name="confirmPassword"
            type="password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;

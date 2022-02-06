import { Component } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';

import './SignIn.scss';

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

  render() {
    return (
      <div className="SignIn">
        <h2 className="SignIn__heading">I already have an account</h2>
        <p className="SignIn__subheading">
          Sign in with your email and password.
        </p>
        <form className="SignIn__form">
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
          <CustomButton type="button">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;

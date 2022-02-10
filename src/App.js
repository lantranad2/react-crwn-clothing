import { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.scss';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // need to unscribe this onSnapshot
        onSnapshot(userRef, (snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="signin" element={<SignInAndSignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

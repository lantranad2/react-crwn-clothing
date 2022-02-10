import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import './Header.scss';
import { signOutUser } from '../firebase/firebase.utils';
// import { signOut } from 'firebase/auth';

// const signOutUser = async () => {
//   await signOut(auth);
// };

const Header = ({ currentUser }) => {
  return (
    <div className="Header">
      <Link to="/">
        <Logo />
      </Link>
      <div className="Header__menu">
        <Link className="Header__menu-item" to="/shop">
          SHOP
        </Link>
        <Link className="Header__menu-item" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="Header__menu-item" onClick={signOutUser}>
            SIGN OUT
          </div>
        ) : (
          <Link className="Header__menu-item" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;

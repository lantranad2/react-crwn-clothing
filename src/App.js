import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import './App.scss';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

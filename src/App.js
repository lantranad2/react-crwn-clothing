import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import './App.scss';
import HomePage from './pages/HomePage';

const Hats = () => {
  return <h1>Hats Page</h1>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="hats" element={<Hats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

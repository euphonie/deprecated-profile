import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import bg from './img/bg.jpg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const rootStyles = {
  background: {
    height: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
}

function App() {
  return (
    <React.StrictMode>
        <BrowserRouter>
          <div style={rootStyles.background}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

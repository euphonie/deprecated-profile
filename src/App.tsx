import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Contact } from './pages/Contact';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './resources/theme/CustomTheme.d';

const rootStyles = {
}

function App() {
  return (
    <React.StrictMode>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer></Footer>
          </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

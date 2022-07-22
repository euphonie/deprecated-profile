import React from 'react';
import './styles/App.css';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Contact } from './pages/Contact';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './resources/theme/CustomTheme.d';
import { AboutMe } from './pages/AboutMe';

function App() {
  return (
    <React.StrictMode>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;

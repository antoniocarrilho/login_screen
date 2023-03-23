import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { Register } from './pages/Register';
import { SignIn } from './pages/SignIn';

import { GlobalStyle } from './styles/global';

import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route element={<SignIn />} />
      </BrowserRouter>
    </>
  );
}

export default App;

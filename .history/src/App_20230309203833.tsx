import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <>
      <BrowserRouter >
        <Route path='/' element={<SignIn />} />
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <>
      <Route path='/' element={<SignIn />} />
    </>
  );
}

export default App;

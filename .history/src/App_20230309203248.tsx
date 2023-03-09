import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <>
      <SignIn />
      <Route path='/' element={} />
    </>
  );
}

export default App;

import React from 'react';
import './App.scss';
import Admin from './pages/admin';
import Home from './pages/home';
import Contact from './pages/contact';

function App() {
  return (
    <React.Fragment>
      <Admin></Admin>
      <Home></Home>
      <Contact></Contact>
    </React.Fragment>
  );
}

export default App;

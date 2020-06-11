import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Navbar/Auth/Auth';

function App() {
  return (
    <div className="App">
      <h1>react react</h1>
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;

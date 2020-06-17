import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Auth from './components/Auth/Auth';
import MonoLog from './components/MonoLog/MonoLog';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const viewToggle = () => {
    return(sessionToken === localStorage.getItem('token') ? 
    <MonoLog token={sessionToken} /> : <Auth updateToken={updateToken} /> )
    // <Sitebar token={sessionToken} /> : <Auth updateToken={updateToken} /> )
    // <Router><Sitebar token={sessionToken} /></Router> : <Auth updateToken={updateToken} /> )

  }

return (
  <div className="App">
    {/* <Router>
      <MonoLog clickLogout={clearToken}/>
    </Router> */}
    {viewToggle()}
  </div>
);
}

export default App;

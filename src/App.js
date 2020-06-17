import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Auth from './components/Auth/Auth';
import Sitebar from './components/Sitebar/Sitebar';
import MyMonologues from './components/MyMonologues/MyMonologues';

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

  const protectedViews = () => {
    return(sessionToken === localStorage.getItem('token') ? 
    <Router><Sitebar token={sessionToken} /></Router> : <Auth updateToken={updateToken} /> )
  }

return (
  <div>
    {/* <Auth /> */}
    {/* <MyMonologues />  */}
    <Router>
      <Sitebar clickLogout={clearToken}/>
    </Router>
    {/* {protectedViews()} */}
  </div>
);
}

export default App;

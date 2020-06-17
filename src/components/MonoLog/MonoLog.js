import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Sitebar from './Sitebar/Sitebar';

  const MonoLog = () => {
      return(
          <div>
              <h1>you've reached the mono-log</h1>
              <Router>
                <Sitebar />
                {/* <Sitebar clickLogout={clearToken}/> */}
            </Router>
          </div>
      )
  }

  export default MonoLog;
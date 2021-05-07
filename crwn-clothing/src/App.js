import React from 'react';
import Homepage from './pages/homepage/homepage-component.jsx'
import './pages/homepage/homepage-styles.scss'
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;

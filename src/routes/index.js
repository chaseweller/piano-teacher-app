import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Auth from './Auth';
import Home from './Home';
import NotFound from './NotFound';
import NewSongs from './NewSongs';
import Settings from './Settings';
import PastSongs from './PastSongs';


export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/auth" component={Auth} />
      <Route path="/newSongs" component={NewSongs} />
      <Route exact path="/settings" component={Settings} />
      <Route path="/pastSongs" component={PastSongs} />
      <Route component={NotFound} />
    </Switch>
  </Router>

)
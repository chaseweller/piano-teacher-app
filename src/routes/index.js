import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Auth from './Auth';
import Home from './Home';
import NotFound from './NotFound';
import CurrentSongs from './CurrentSongs';
import NewSong from './NewSong';
import Settings from './Settings';
import PastSongs from './PastSongs';
import OtherResources from './OtherResources';


export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/auth" component={Auth} />
      <Route path="/currentSongs" component={CurrentSongs} />
      <Route path="/newSong" component={NewSong} />
      <Route exact path="/settings" component={Settings} />
      <Route path="/pastSongs" component={PastSongs} />
      <Route exact path="/otherResources" component={OtherResources} />
      <Route component={NotFound} />
    </Switch>
  </Router>

)
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import CurrentSongs from './CurrentSongs';
import Feedback from './Feedback';
import Home from './Home';
import LandingPage from './LandingPage';
import Mastery from './Mastery';

import NewSong from './NewSong';
import NotFound from './NotFound';
import OtherResources from './OtherResources';
import PastSongs from './PastSongs';
import Settings from './Settings';
import Users from './Users';


export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/currentSongs" component={CurrentSongs} />
      <Route path="/landingPage" component={LandingPage} />
      <Route path="/newSong" component={NewSong} />
      <Route path="/mastery" component={Mastery} />
      <Route exact path="/feedback" component={Feedback} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/settings" component={Settings} />
      <Route path="/pastSongs" component={PastSongs} />
      <Route exact path="/otherResources" component={OtherResources} />
      <Route component={NotFound} />
    </Switch>
  </Router>

)
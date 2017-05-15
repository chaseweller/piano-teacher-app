import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import LandingPage from '../index';
import Home from '../index';

const authExample = () => (
  <Router>
    <div>
      <AuthButton/>
      <ul>
        <li><Link to="/landingPage">Public Page</Link></li>
        <li><Link to="/">Home Page</Link></li>
      </ul>
      <Route path="/landingPage" component={LandingPage}/>
      <Route path="/" component={Home}/>
      <PrivateRoute path="/protected" component={Protected}/>
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
};

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
      <p>
        Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}> Sign out</button>
      </p>
    ) : (
      <p> You are not Logged in</p>
    )
));

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (fakeAuth.isAuthenticated ? (<Component {...props}/>) : (<Redirect to={{ pathname: '/login', state: { from: props.location } }}/>))}/>
);

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

export default class extends Component {

  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div className="App">
        <h1>Landing</h1>
        <p> You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}
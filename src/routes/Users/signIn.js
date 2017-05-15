import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import base from '../../firebase';


export default class extends Component {

  authHandler = (error, user) => {
    if (error) console.log(error);
    this.props.history.push("/");
    localStorage.setItem('user', base.auth().currentUser.uid);
    localStorage.getItem('user');
  };

  passwordLogin = (error, user) => {
    if (error) console.error(error);
    console.log('Login successful ' + user);

  }


  render() {

    return (
      <div>
        <h1>Login Page</h1>
        <form>
          <TextField hintText="Email" style={{margin: 10, border: ' solid gray', width: '25%'}} /><br/>
          <TextField  type="password" hintText="Password" style={{margin: 10, border: ' solid gray', width: '25%'}}/><br/>
          <RaisedButton label="Login" onTouchTap={ e => base.authWithPassword({
            email: '',
            password: ''
          }, this.passwordLogin)} style={{margin: 10, width: '25%'}}/>
        </form>
        <RaisedButton label="Google Login" onClick={e => base.authWithOAuthPopup('google', this.authHandler)} style={{margin: 10, width: '25%'}}/>

      </div>
    )
  }
}
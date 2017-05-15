import React, {Component} from 'react';
import {RaisedButton, TextField} from 'material-ui';
import base from '../../firebase';

export default class extends Component {

  passwordHandler = (error, user) => {
    if(error) console.error(error);
    console.log(base.authWithPassword());
  }


  render() {

    return(
      <div>
        <h1>Sign Up</h1>
        <form>
          <TextField hintText="Username" style={{ margin: 10, border: ' solid gray', width: '25%'}} /><br/>
          <TextField hintText="Email Address" style={{ margin: 10, border: ' solid gray', width: '25%'}} /><br/>
          <TextField  type="password" hintText="Password" style={{margin: 10, border: ' solid gray', width: '25%'}}/><br/>
          <RaisedButton label="Login" onTouchTap={ e => base.authWithPassword({
            email: 'r.chase.weller@gmail.com',
            password: 'Swish019'
          }, this.passwordHandler)} style={{margin: 10, width: '25%'}}/>
        </form>


      </div>
    )
  }

}

// <RaisedButton label="Google Sign-in" onClick={e => base.authWithOAuthPopup('google', this.login)} style={{margin: 10, width: '25%'}}/>
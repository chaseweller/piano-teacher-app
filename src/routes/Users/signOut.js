import React, {Component} from 'react';
import {RaisedButton} from 'material-ui';
import base from '../../firebase';

export default class extends Component {

  // logout = (user) => {
  //   base.unauth(user);
  //   this.props.history.push("/landingPage");
  //
  // }

  render() {

    return(
      <div>
        <h1>Logout</h1>
        <RaisedButton label="Logout" onTouchTap={base.unauth}/>
      </div>
    )
  }

}



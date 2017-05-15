import React, { Component } from 'react';
import SignIn from './signIn';
import SignOut from './signOut'
import SignUp from'./signUp';

export default class extends Component {


  render() {

    return (
      <div className="App">
        <SignIn />
        <SignOut />
        <SignUp />
      </div>

    )
  }

}
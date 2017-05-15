import React, { Component } from 'react';
import { AppBar, IconButton, IconMenu, FlatButton, MenuItem, Drawer } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/social/school';
import Routes from '../routes';
// import './Layout.css';

const Login = () => (
  <a href="/users"><FlatButton label="Login" style={{margin: 10, fontWeight: 'bold', color: 'white'}}/></a>
);

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
  >
    <a href="/"> <MenuItem primaryText="Home"/></a>
    <a href="/settings"><MenuItem primaryText="Settings"></MenuItem></a>
    <a href="/feedback"><MenuItem primaryText="Feedback"></MenuItem></a>
    <a href="/landingPage"><MenuItem primaryText="Logout"></MenuItem></a>
  </IconMenu>
);

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false, logged: true }
  }


  handleClose = () => this.setState({ open: false })

  handleChange = (event, logged) => {
    this.setState({ logged: logged })
  };


  render() {
    return (
      <section className="AppLayout">
        <AppBar title="Piano Teacher" titleStyle={{ cursor: 'pointer' }}
                onTitleTouchTap={() => window.location.href = '/'}
                onLeftIconButtonTouchTap={e => this.setState({ open: !this.state.open })}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={this.state.logged ? <Logged /> : <Login/> }/>
        <Drawer overlayClassName='AppBar' {...this.state} docked={false}
                onRequestChange={(open) => this.setState({ open })} className="left-navigation">
          <MenuItem><a href="/">Home</a></MenuItem>
          <MenuItem><a href="/currentSongs">Current Songs</a></MenuItem>
          <MenuItem><a href="/pastSongs">New Lesson</a></MenuItem>
          <MenuItem><a href="/pastSongs">Past Lessons</a></MenuItem>
          <MenuItem><a href="/mastery">Mastery Countdown</a></MenuItem>
          <MenuItem><a href="/pastSongs">PDF Songs</a></MenuItem>
          <MenuItem><a href="/otherResources">Other Resources</a></MenuItem>
        </Drawer>
        <article>
          <Routes />

        </article>
      </section>
    )
  }
}
import React, { Component } from 'react';
import { AppBar, IconButton, IconMenu, FlatButton, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/social/school';
import Routes from '../routes';

const Login = () => (
  <FlatButton {...this.props} label="Login" />
);

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Home" />
    <MenuItem primaryText="Settings"><a href="/settings"></a></MenuItem>
  </IconMenu>
);

export default class extends Component {

    state = {
      logged: true,
    };

    handleChange = (event, logged) => {
    this.setState({logged: logged})
    };

  render() {
    return(
      <section>
        <AppBar title="Piano Teacher"
                iconElementLeft={<a href="/"> <IconButton><NavigationClose /></IconButton></a>}
                iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
        <article>
          <Routes />
        </article>
      </section>
    )
  }
}
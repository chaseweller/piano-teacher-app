import React, { Component } from 'react';
import { DatePicker, TextField, Paper, RaisedButton } from 'material-ui';
import base from '../../../firebase';

const buttonStyle = {
  margin: 5
};

const paperStyle = {
  height: 400,
  width: 300,
  margin: 30,
  textAlign: 'center',
  display: 'inline-block',
};

class addNewSong extends Component {

  constructor(props) {
    super(props);
    this.state = { newSong: {}, songTitle: '', songBook: '', notes: '' };
  }

  componentDidMount() {
    this.ref = base.syncState(`newSong`, {
      context: this,
      state: 'newSong',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };


  onSongSaved = (e) => {
    e.preventDefault();

    const song = this.state;
    const { history } = this.props;
    const { id } = this.props;

    if (!id) {
      base.push('song', {
        context: this,
        data: song,
        then(err) {
          if (!err) {
            history.push('/home');
          }
        }
      });
    } else {
      base.post(`song/${id}`, {
        context: this,
        data: song,
        then(err) {
          if (!err) {
            history.push('/home');
          }
        }
      })
    }

  }

  render() {


    return (
      <div>
        <Paper style={paperStyle} zDepth={4}>
          <form onSubmit={this.onSongSaved}>
            <h3>New Song</h3>
            <DatePicker hintText="Lesson Date" autoOk={true}
                        />
            <TextField floatingLabelText="Song Title"
                       value={this.state.songTitle}
                       onChange={e => this.setState({ songTitle: e.target.value })}
                       required minLength={2}/>
            <TextField floatingLabelText="Song Book (opt)" value={this.state.songBook}
                       onChange={e => this.setState({ songBook: e.target.value})}/>
            <TextField multiLine={true} floatingLabelText="Notes" rows={2} value={this.state.notes}
                       onChange={e => this.setState({ notes: e.target.value})}/>
            <RaisedButton label="Cancel" style={buttonStyle}/>
            <RaisedButton type="submit" label="Save" primary={true} style={buttonStyle} />
          </form>
        </Paper>
      </div>
    )
  }
}

export default addNewSong;
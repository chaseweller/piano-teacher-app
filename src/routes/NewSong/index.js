import React, { Component } from 'react';
import { DatePicker, TextField, Paper, RaisedButton } from 'material-ui';
import StarRatingComponent from 'react-star-rating-component';
import base from '../../firebase';
import './index.css';

const buttonStyle = {
  margin: 5
};

const paperStyle = {
  height: 600,
  width: 300,
  margin: 30,
  textAlign: 'center',
  display: 'inline-block'
};

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = { songTitle: '', songBook: '', notes: '', date: '', rating: 1} ;
  }

  // componentDidMount() {
  //   this.ref = base.syncState(`newSong`, {
  //     context: this,
  //     state: 'newSong',
  //   });
  // }
  onStarClick(nextValue) {
    this.setState({rating: nextValue});
  }

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // };

  setDate = (x, event) => {
    console.log(JSON.stringify(event));
    console.log(event);
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
            history.push('/currentSongs');
          }

        }
      });
    } else {
      base.post(`song/${id}`, {
        context: this,
        data: song,
        then(err) {
          if (!err) {
            history.push('/currentSongs');
          }
        }
      })
    }

  }

  render() {

    const { rating } = this.state;

    return (
      <div className="Container">
        <Paper style={paperStyle} zDepth={4}>
          <form onSubmit={this.onSongSaved}>
            <h3>New Song</h3>
            <DatePicker hintText="Lesson Date" autoOk={true} onChange={this.setDate} />
            <TextField floatingLabelText="Song Title"
                       value={this.state.songTitle} required minLength={2}
                       onChange={e => this.setState({ songTitle: e.target.value })}/>
            <TextField floatingLabelText="Song Book (opt)" value={this.state.songBook}
                       onChange={e => this.setState({ songBook: e.target.value})}/>
            <TextField multiLine={true} floatingLabelText="Notes" rows={2} value={this.state.notes}
                       onChange={e => this.setState({ notes: e.target.value})}/><br/>
            <div style={{fontSize: 25, marginTop: 15}}>
            <StarRatingComponent
              name="Rating"
              starCount={3}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}/>
            </div><br/>
            <RaisedButton label="Cancel" style={buttonStyle} onTouchTap={e => console.log(this.props.history.goBack())}/>
            <RaisedButton type="submit" label="Save" primary={true} style={buttonStyle} />
          </form>
        </Paper>
      </div>
    )
  }
}

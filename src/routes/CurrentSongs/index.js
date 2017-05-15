import React, { Component } from 'react';
import {
  FloatingActionButton,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  RaisedButton,
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import base from '../../firebase';
import Router from 'react-router-dom';


const style = {
  margin: 20
};
const plusButton = {
  margin:10
};


export default class extends Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = { addNewSong: [], songs: [], showRowHover: false };
  }
  componentDidMount() {
    base.syncState(`song`, {
      context: this,
      state: 'songs',
      asArray: true
    })
  }


  handleAdd() {
    this.setState({ addNewSong: true })
  }

  // handleDone() {
//     // bears endpoint currently holds the object { name: 'Bill', type: 'Grizzly' }
//     base.props.history.push(`song/${uid}`, {
//       data: {songTitle: '', songBook: '', notes: ''}
//     }).then(() => {
//
//     }).catch(err => {
// console.error(err)
//     });
//
//   }
//
//   handleEdit() {
//
//   }

  render() {

    // const addSong = this.state.addNewSong;

    return (
      <div className="newSongs">
        <Toolbar>
          <ToolbarTitle text="Songs to practice this week"/>
          <ToolbarGroup lastChild={true}>
            <a href="/newSong"><RaisedButton label="New" style={style}/></a>
          </ToolbarGroup>
        </Toolbar>
        <Table style={{tableLayout: 'auto', fontWeight: 'bold'}} >
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={{width: '10%'}}> Date </TableHeaderColumn>
              <TableHeaderColumn style={{width: '5%'}}> Rating </TableHeaderColumn>
              <TableHeaderColumn style={{width: '20%'}}> Song Title </TableHeaderColumn>
              <TableHeaderColumn style={{width: '15%'}}> Song Book </TableHeaderColumn>
              <TableHeaderColumn style={{width: '40%'}}> Notes </TableHeaderColumn>
              <TableHeaderColumn style={{width: '5%'}}> Done </TableHeaderColumn>
              <TableHeaderColumn style={{width: '5%'}}> Edit </TableHeaderColumn>


            </TableRow>
          </TableHeader>
          <TableBody showRowHover={this.state.showRowHover}>
          {
            this.state.songs.map(entry => (
              <TableRow key={entry.key} className="tableRow" >
                <TableRowColumn style={{width: '10%'}}>{entry.date}</TableRowColumn>
                <TableRowColumn style={{width: '5%'}}>{entry.rating}</TableRowColumn>
                <TableRowColumn style={{width: '20%'}}>{entry.songTitle}</TableRowColumn>
                <TableRowColumn style={{width: '15%'}}>{entry.songBook}</TableRowColumn>
                <TableRowColumn style={{width: '40%'}}>{entry.notes}</TableRowColumn>
                <TableRowColumn style={{width: '5%'}}><i className="material-icons" onClick={this.handleDone}>done</i></TableRowColumn>
                <TableRowColumn style={{width: '5%'}}><i className="material-icons">mode_edit</i></TableRowColumn>

              </TableRow >
            ))
          }

          </TableBody>
        </Table>
          <a href="/newSong"><FloatingActionButton mini={true} style={plusButton}><ContentAdd /></FloatingActionButton></a>
      </div>


    )
  }


}


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
import './index.css';

const style = {
  margin: 20
};
const plusButton = {
  margin:10
}


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
  };


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
        <Table className="tableColumn">
          <TableHeader>
            <TableRow>
              <TableHeaderColumn> Date </TableHeaderColumn>
              <TableHeaderColumn> Song Title </TableHeaderColumn>
              <TableHeaderColumn> Song Book </TableHeaderColumn>
              <TableHeaderColumn> Notes </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody className="table" showRowHover={this.state.showRowHover}>
          {
            this.state.songs.map(entry => (
              <TableRow key={entry.key} className="tableColumn" >
                <TableRowColumn className="tableColumn">{entry.date}</TableRowColumn>
                <TableRowColumn>{entry.songTitle}</TableRowColumn>
                <TableRowColumn>{entry.songBook}</TableRowColumn>
                <TableRowColumn>{entry.notes}</TableRowColumn>
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


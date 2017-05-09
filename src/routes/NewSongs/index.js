import React, { Component } from 'react';
import {
  FloatingActionButton,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NewSong from './containers/addNewSong';
// import firebase from '../../firebase';

const style = {
  margin: 20
};


export default class extends Component {

  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.state = { addNewSong: false };
  }

  handleAdd() {
    this.setState({ addNewSong: true })
  };


  render() {

    // const addSong = this.state.addNewSong;

    return (
      <div>
        <h2>Songs to practice this week</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn> Date </TableHeaderColumn>
              <TableHeaderColumn> Song Title </TableHeaderColumn>
              <TableHeaderColumn> Song Book </TableHeaderColumn>
              <TableHeaderColumn> Notes </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
              <TableRowColumn></TableRowColumn>
            </TableRow >
          </TableBody>
        </Table>
        Add new song
        <FloatingActionButton mini={true} style={style}><ContentAdd /></FloatingActionButton>
        <NewSong/>
      </div>


    )
  }


}


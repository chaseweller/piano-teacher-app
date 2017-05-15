import React, { Component } from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableRowColumn, TableBody} from 'material-ui';

export default class extends Component {

  render() {

    return (
      <div>
        <h1>Past Songs</h1>
        <Table style={{ tableLayout: 'auto', fontWeight: 'bold' }}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn style={{ width: '10%' }}> Date </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '5%' }}> Rating </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '20%' }}> Song Title </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '15%' }}> Song Book </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '40%' }}> Notes </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '5%' }}> Done </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '5%' }}> Edit </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={this.state.showRowHover}>
            {
              this.state.songs.map(entry => (
                <TableRow key={entry.key} className="tableRow">
                  <TableRowColumn style={{ width: '10%' }}>{entry.date}</TableRowColumn>
                  <TableRowColumn style={{ width: '5%' }}>{entry.rating}</TableRowColumn>
                  <TableRowColumn style={{ width: '20%' }}>{entry.songTitle}</TableRowColumn>
                  <TableRowColumn style={{ width: '15%' }}>{entry.songBook}</TableRowColumn>
                  <TableRowColumn style={{ width: '40%' }}>{entry.notes}</TableRowColumn>
                  <TableRowColumn style={{ width: '5%' }}><i className="material-icons">done</i></TableRowColumn>
                  <TableRowColumn style={{ width: '5%' }}><i className="material-icons">mode_edit</i></TableRowColumn>

                </TableRow >
              ))
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}



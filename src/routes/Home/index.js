import React from 'react';
import { RaisedButton } from 'material-ui';
import TODOList from '../ToDoList';

import './index.css';

const style = {
  margin: 12
};


export default () => (
  <div className="App">
    <h1>Home</h1>
    <article>
      <a href="currentSongs"><RaisedButton label="New Lesson" style={style}/></a>
      <a href="pastSongs"><RaisedButton label="Past Lessons" style={style}/></a>
      <TODOList/>
    </article>

  </div>
)
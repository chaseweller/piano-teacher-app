import React from 'react';
import { RaisedButton } from 'material-ui';

const style = {
  margin: 12
};


export default () => (
  <div>
    <h1>Home</h1>
    <article>
      <a href="newSongs"><RaisedButton label="New Lesson" style={style}/></a>
      <a href="pastSongs"><RaisedButton label="Past Lessons" style={style}/></a>
    </article>
  </div>
)
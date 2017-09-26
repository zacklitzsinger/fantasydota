import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Paper>
          <FlatButton secondary={true} label='About' containerElement={<Link key="About" to='/about'>About</Link>} />
        </Paper>
      </footer>
    );
  }
}

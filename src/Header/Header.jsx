import React, {Component, PropTypes} from 'react';
// import styles from './App.css';

import Toolbar from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

export default class Header extends Component {
  render() {
    const {children} = this.props;
    return (
      <Toolbar title="Fantasy Dota 2">
        <FlatButton label="Home" />
      </Toolbar>
    );
  }
}

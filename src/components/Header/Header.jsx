import React, {Component} from 'react';
// import styles from './App.css';

import {Link} from 'react-router-dom';

import Toolbar from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

export default class Header extends Component {
  render() {
    return (
      <Toolbar title='Fantasy Dota 2'>
        <FlatButton label='Home' containerElement={<Link key="Home" to='/'>Home</Link>}/>
      </Toolbar>
    );
  }
}

import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import BottomNavigation from 'material-ui/BottomNavigation';

export default class Footer extends Component {
  render() {
    return (
      <BottomNavigation>
        <FlatButton label='About' containerElement={<Link key="About" to='/about'>About</Link>} />
      </BottomNavigation>
    );
  }
}

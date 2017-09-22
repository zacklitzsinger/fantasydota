import React, {Component} from 'react';

import FlatButton from 'material-ui/FlatButton';
import BottomNavigation from 'material-ui/BottomNavigation';

export default class Footer extends Component {
  render() {
    return (
      <BottomNavigation>
        <FlatButton label='About' />
      </BottomNavigation>
    );
  }
}

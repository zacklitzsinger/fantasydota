import React, {Component, PropTypes} from 'react';

import FlatButton from 'material-ui/FlatButton';
import BottomNavigation from 'material-ui/BottomNavigation';

export default class Footer extends Component {
  render() {
    const {children} = this.props;
    return (
      <BottomNavigation>
        <FlatButton label='About' />
      </BottomNavigation>
    );
  }
}

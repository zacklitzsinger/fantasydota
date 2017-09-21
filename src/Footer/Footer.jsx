import React, {Component, PropTypes} from 'react';

import BottomNavigation from 'material-ui/BottomNavigation';

export default class Footer extends Component {
  render() {
    const {children} = this.props;
    return (
      <BottomNavigation>
      </BottomNavigation>
    );
  }
}

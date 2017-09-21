import React, {Component, PropTypes} from 'react';

import Paper from 'material-ui/Paper';

export default class Home extends Component {
  render() {
    const {children} = this.props;
    return (
      <Paper>
        Home page
        {children}
      </Paper>
    );
  }
}

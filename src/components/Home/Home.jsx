import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

class Home extends Component {
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

Home.propTypes = {
  children: PropTypes.node
};

export default Home;

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

class Home extends Component {
  render() {
    const {children} = this.props;
    return (
      <Paper>
        <h2>Home page</h2>
        Fantasy Dota 2 demo site
        {children}
      </Paper>
    );
  }
}

Home.propTypes = {
  children: PropTypes.node
};

export default Home;

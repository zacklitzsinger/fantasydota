import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Paper from 'material-ui/Paper';

class Team extends Component {
  render() {
    const {name, icon} = this.props;
    return (
      <Paper>
        <h3>{name}</h3>
        <Paper zDepth={3}>
          <img src={icon} width={100} height={100}/>
        </Paper>
      </Paper>
    );
  }
}

Team.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string
};

const mapStateToProps = (state, ownProps) => ({
  name: state.teamInfo[ownProps.match.params.id].name,
  icon: state.teamInfo[ownProps.match.params.id].icon
});

export default connect(mapStateToProps, null)(Team);

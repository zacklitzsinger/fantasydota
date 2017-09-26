import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Paper from 'material-ui/Paper';

class PlayerInfo extends Component {
  render() {
    const {name, team, position, points} = this.props;
    return (
      <Paper>
        <h3>{name}</h3>
        <div>Team: {team}</div>
        <div>Position: {position}</div>
        <div>Points: {points}</div>
      </Paper>
    );
  }
}

PlayerInfo.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  position: PropTypes.string,
  points: PropTypes.number
};

const mapStateToProps = (state, ownProps) => ({
  name: state.players[ownProps.match.params.id].name,
  team: state.players[ownProps.match.params.id].team,
  position: state.players[ownProps.match.params.id].position,
  points: state.players[ownProps.match.params.id].points,
});

export default connect(mapStateToProps, null)(PlayerInfo);

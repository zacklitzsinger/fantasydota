import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import {Link} from 'react-router-dom';

class PlayerListRow extends Component {
  render() {
    const {id, name, position, team, points} = this.props;
    return (
      <TableRow hoverable={true}>
        <TableRowColumn><Link to={'/players/'+id}>{name}</Link></TableRowColumn>
        <TableRowColumn>{team}</TableRowColumn>
        <TableRowColumn>{position}</TableRowColumn>
        <TableRowColumn>{points}</TableRowColumn>
      </TableRow>
    );
  }
}

PlayerListRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  position: PropTypes.string,
  team: PropTypes.string,
  points: PropTypes.number
};

const mapStateToProps = (state, ownProps) => ({
  name: state.players[ownProps.id].name,
  position: state.players[ownProps.id].position,
  team: state.players[ownProps.id].team,
  points: state.players[ownProps.id].points
});

export default connect(mapStateToProps)(PlayerListRow);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {TableRow, TableRowColumn} from 'material-ui/Table';

import {Link} from 'react-router-dom';

class PlayerListRow extends Component {
  render() {
    const {id, name, position, organization, points} = this.props;
    return (
      <TableRow hoverable={true}>
        <TableRowColumn><Link to={'/players/'+id}>{name}</Link></TableRowColumn>
        <TableRowColumn>{organization}</TableRowColumn>
        <TableRowColumn>{position}</TableRowColumn>
        <TableRowColumn>{points}</TableRowColumn>
      </TableRow>
    );
  }
}

PlayerListRow.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  position: PropTypes.string,
  organization: PropTypes.string,
  points: PropTypes.number
};

const mapStateToProps = (state, ownProps) => ({
  name: state.players.entities[ownProps.id].name,
  position: state.players.entities[ownProps.id].position,
  organization: state.players.entities[ownProps.id].organization,
  points: state.players.entities[ownProps.id].points
});

export default connect(mapStateToProps)(PlayerListRow);

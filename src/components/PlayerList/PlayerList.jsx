import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';

import PlayerListRow from './PlayerListRow';

class PlayerList extends Component {
  render() {
    const {players} = this.props;
    return (
      <Table selectable={false}>
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Organization</TableHeaderColumn>
            <TableHeaderColumn>Position</TableHeaderColumn>
            <TableHeaderColumn>Points</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {players.map((player) =>
            <PlayerListRow key={player} id={player} />
          )}
        </TableBody>
      </Table>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array
};

export default PlayerList;

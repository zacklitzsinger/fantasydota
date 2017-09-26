import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {keys} from 'lodash';

import {Card, CardHeader} from 'material-ui/Card';
import PlayerList from 'components/PlayerList';

class Players extends Component {
  render() {
    const {players = {}} = this.props;
    const playerIds = keys(players);
    return (
      <Card>
        <CardHeader>Players</CardHeader>
        <PlayerList players={playerIds}/>
      </Card>
    );
  }
}

Players.propTypes = {
  players: PropTypes.object
};

const mapStateToProps = state => ({
  players: state.players
});

export default connect(mapStateToProps, null)(Players);

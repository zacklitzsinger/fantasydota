import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Card, CardHeader} from 'material-ui/Card';
import PlayerList from 'components/PlayerList';

class Players extends Component {
  render() {
    const {players = {}} = this.props;
    return (
      <Card>
        <CardHeader>Players</CardHeader>
        <PlayerList players={players}/>
      </Card>
    );
  }
}

Players.propTypes = {
  players: PropTypes.array
};

const mapStateToProps = state => ({
  players: state.players.ids
});

export default connect(mapStateToProps, null)(Players);

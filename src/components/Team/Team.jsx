import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Card, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import PlayerList from 'components/PlayerList';

class Team extends Component {
  render() {
    const {name, icon, players} = this.props;
    return (
      <Card>
        <CardHeader>{name}</CardHeader>
        <Avatar src={icon} size={100}/>
        <PlayerList players={players}/>
      </Card>
    );
  }
}

Team.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  players: PropTypes.array
};

const mapStateToProps = (state, ownProps) => ({
  name: state.teams.entities[ownProps.match.params.id].name,
  icon: state.teams.entities[ownProps.match.params.id].icon,
  players: state.teams.entities[ownProps.match.params.id].players
});

export default connect(mapStateToProps, null)(Team);

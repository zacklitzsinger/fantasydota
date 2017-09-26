import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader} from 'material-ui/Card';

class Teams extends Component {
  render() {
    const {teams = []} = this.props;
    const teamContent = teams.map((team) =>
      <ListItem key={team.id}
        leftAvatar={<Avatar backgroundColor='white' src={team.icon}/>}
        primaryText={team.name}
        containerElement={<Link to={'/teams/'+team.id}>{team.name}</Link>}
      />
    );
    return (
      <Card>
        <CardHeader>Teams</CardHeader>
        <List>
        {teamContent}
        </List>
      </Card>
    );
  }
}

Teams.propTypes = {
  teams: PropTypes.array
};

const mapStateToProps = state => ({
  teams: state.teams
});

export default connect(mapStateToProps, null)(Teams);

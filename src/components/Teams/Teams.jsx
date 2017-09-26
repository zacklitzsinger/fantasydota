import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

class Teams extends Component {
  render() {
    const {teams = []} = this.props;
    const teamContent = teams.map((team) =>
      <FlatButton key={team.id} label={team.name} containerElement={<Link to={'/teams/'+team.id}>{team.name}</Link>}/>
    );
    return (
      <Paper>
        <h3>Teams</h3>
        {teamContent}
      </Paper>
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

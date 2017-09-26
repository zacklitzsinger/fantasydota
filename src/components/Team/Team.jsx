import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Card, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

class Team extends Component {
  render() {
    const {name, icon} = this.props;
    return (
      <Card>
        <CardHeader>{name}</CardHeader>
        <Avatar src={icon} size={100}/>
      </Card>
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

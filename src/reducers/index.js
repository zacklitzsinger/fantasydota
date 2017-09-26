import { combineReducers } from 'redux';

import teams from 'reducers/teamsReducer';
import teamInfo from 'reducers/teamInfoReducer';
import players from 'reducers/playersReducer';

export default combineReducers({
  teams,
  teamInfo,
  players
});

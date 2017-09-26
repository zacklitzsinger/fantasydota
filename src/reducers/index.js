import { combineReducers } from 'redux';

import teams from 'reducers/teamsReducer';
import teamInfo from 'reducers/teamInfoReducer';

export default combineReducers({
  teams,
  teamInfo
});

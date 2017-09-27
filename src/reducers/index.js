import { combineReducers } from 'redux';

import teams from 'reducers/teamsReducer';
import players from 'reducers/playersReducer';

export default combineReducers({
  teams,
  players
});

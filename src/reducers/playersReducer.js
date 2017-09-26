// Players will contain the general player information (primary id and name)

const initialState = {
  1: {id: 1, name: 'Sumail', position: 'core', team: 'EG', points: 10},
  2: {id: 2, name: 'GH', position: 'support', team: 'Team Liquid', points: 12},
  3: {id: 3, name: 'Notail', position: 'core', team: 'OG', points: 8},
  4: {id: 4, name: 'Fear', position: 'support', team: 'EG', points: 15}
};

export default (state = initialState) => {
  return state;
};

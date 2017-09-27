const initialState = {
  ids: [1, 2, 3, 4],
  entities: {
    1: {id: 1, name: 'Sumail', position: 'core', organization: 'EG', points: 10},
    2: {id: 2, name: 'GH', position: 'support', organization: 'Team Liquid', points: 12},
    3: {id: 3, name: 'Notail', position: 'core', organization: 'OG', points: 8},
    4: {id: 4, name: 'Fear', position: 'support', organization: 'EG', points: 15}
  }
};

export default (state = initialState) => {
  return state;
};

const initialState = {
  ids: [1, 2],
  entities: {
    1: {
      id: 1,
      name: 'Team Phoenix',
      icon: '/img/TeamPhoenix.png',
      players: [1, 2]
    },
    2: {
      id: 2,
      name: 'Team Underlord',
      icon: '/img/TeamUnderlord.png',
      players: [3, 4]
    }
  }
};

export default (state = initialState) => {
  return state;
};

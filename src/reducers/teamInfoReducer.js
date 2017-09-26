// Team info will contain the details for each team

const initialState = {
  1: {
    name: 'Fnatic',
    icon: '/img/Fnatic.png',
    players: [1, 2]
  },
  2: {
    name: 'Team Liquid',
    icon: '/img/TeamLiquid.jpg',
    players: [3, 4]
  }
};

export default (state = initialState) => {
  return state;
};

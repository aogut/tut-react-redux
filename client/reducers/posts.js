// a reducer takes in 2 things
// 1. action (info about what happened)
// 2. current state
// (previousState, action) => nextState

function posts(state = [], action) {
  console.log('----- post reducer -----');
  console.log(state, action);

  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes');
      const i = action.index;
      console.log("Old State", state[i]);
      var newState =  [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1}, // combining
        ...state.slice(i+1) // after the one we are updating
      ];
      console.log("New State", newState[i]);
      return newState;
    default:
      return state;
  }
}

export default posts;

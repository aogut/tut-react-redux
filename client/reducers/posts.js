// a reducer takes in 2 things
// 1. action (info about what happened)
// 2. current state
// (previousState, action) => nextState

function posts(state = [], action) {
  console.log('post reducer');
  // return state;
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes');
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1}, // combining
        ...state.slice(i+1) // after the one we are updating
      ];
    default:
      return state;
  }
}

export default posts;

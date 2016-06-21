// a reducer takes in 2 things
// 1. action (info about what happened)
// 2. current state
// (previousState, action) => nextState

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;

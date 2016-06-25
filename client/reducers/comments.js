function comments(state = [], action) {
  console.log('> comment reducer --', state);
  if (typeof action.postId !== 'undefined') {
    return {
      // current state
      ...state,
      [action.postId]: postComment(state[action.postId], action)
    }
  }
  return state;
}

function postComment(state=[], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i+1)
      ];
    default:
      return state;
  }
}

export default comments;

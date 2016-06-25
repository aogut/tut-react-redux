// Step8

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// expose state data to UI via props
function mapStateToProps(state) {
    return {
      posts: state.posts,
      comments: state.comments
    }
}

// expose action creators to UI via props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

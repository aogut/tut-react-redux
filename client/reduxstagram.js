import React from 'react';
import { render } from 'react-dom';

// react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// css
import css from './styles/style.styl';

// components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const route = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      // Children
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)


render(route, document.getElementById('root'));

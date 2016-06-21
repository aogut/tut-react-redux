import React from 'react';
import { render } from 'react-dom';

// react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';   // react redux binding
import store, { history } from './store';

// css
import css from './styles/style.styl';

// components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const router = (
  <Provider store={store}>
    <Router history={history}>  // swap from browserHistory
      <Route path="/" component={Main}>
        // Children
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)


render(router, document.getElementById('root'));

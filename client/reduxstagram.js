import React from 'react';
import { render } from 'react-dom';

// css
import css from './styles/style.styl';
import Main from './components/Main';

render(<Main><p>hello</p></Main>, document.getElementById('root'));

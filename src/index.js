import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/default.css';
import './stylesheets/pandoc-code-highlight.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
  </Router>),
  document.getElementById('root')
);
registerServiceWorker();

//import { createDevTools } from 'redux-devtools';
//import LogMonitor from 'redux-devtools-log-monitor';
//import DockMonitor from 'redux-devtools-dock-monitor';
require("./style.scss");
const React = require('react');
const ReactDOM = require('react-dom');
const { applyMiddleware, compose, createStore, combineReducers } = require('redux');

const { Provider } = require('react-redux');
const { Router, Route, IndexRoute } = require('react-router');

const createHistory = require('history/lib/createHashHistory');
const { syncHistory, routeReducer } = require('react-router-redux');

const reducers = require('./reducers');
const { App, Home, Directors, SocialClubs, Events, Membership } = require('./components');


/*
const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));
*/
const reducer = combineReducers(reducers, {
  routing: routeReducer
});



const history = createHistory({
  queryKey: false
});
// Sync dispatched route actions to the history
const middleware = syncHistory(history);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const store = createStoreWithMiddleware(reducer); //createStore(reducer);


// Required for replaying actions from devtools to work
//middleware.listenForReplays(store);


ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="directors" component={Directors}/>
          <Route path="events" component={Events}/>
          <Route path="membership" component={Membership}/>
          <Route path="socialclubs" component={SocialClubs}/>    
        </Route>
      </Router>
  </Provider>,
  document.getElementById('mount')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer.js'
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';
import { HashRouter } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory'
ReactGA.initialize('UA-148596560-1');
ReactGA.pageview(window.location.hash);


const store = createStore(reducer, applyMiddleware(thunk));

const history = createHistory()
history.listen((location, action) => {
 //   console.log({ page: location.hash })
  ReactGA.set({ page: location.hash });
  ReactGA.pageview(location.hash);
});

ReactDOM.render(<Provider store={store}>
    <HashRouter history={history}>
        <App />
    </HashRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

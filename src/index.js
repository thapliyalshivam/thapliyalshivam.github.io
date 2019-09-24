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
ReactGA.initialize('UA-148596560-1');
ReactGA.pageview(window.location.hash);
const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

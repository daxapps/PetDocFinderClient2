import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from 'redux-promise';

import './index.css';
import App from './components/app';
import TopNav from './components/top-nav';
import Vetlist from './components/vetlist';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<TopNav />
    		<Switch>
    			<Route path="/" component={App} />
    			<Route path="/vetlist" component={Vetlist} />
    		</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
registerServiceWorker();

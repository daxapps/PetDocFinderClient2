import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from 'redux-promise';
// import yelp from 'yelp-fusion';

import './index.css';
import App from './components/app';
import TopNav from './components/top-nav';
import Vetlist from './components/vetlist';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
// import { getToken } from "../actions";
// import store from './store';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const CLIENT_ID = "2Xp8K5kCnUIEYFKFfTokZQ";
// const CLIENT_SECRET = "HmZl1vROOJ8qpCt5uD3nqCOzE9FysGdPVYeQjZ8rGvy6m1XOQilgp5RIAydSzFBr"

// yelp.accessToken(CLIENT_ID, CLIENT_SECRET).then(response => {
// 	localStorage.setItem("accessToken", response.jsonBody.access_token)

// })

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
    		<TopNav />
    		<Switch>
    			<Route exact path="/" component={App} />
    			<Route path="/vetlist" component={Vetlist} />
    		</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
registerServiceWorker();

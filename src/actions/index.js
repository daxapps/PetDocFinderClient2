import axios from "axios";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';

export const FETCH_REVIEWS = "fetch_reviews";
export const GET_TOKEN = "get_token";

const ROOT_URL = "https://api.yelp.com/v3/businesses/search";
// const CLIENT_ID = "2Xp8K5kCnUIEYFKFfTokZQ";
// const CLIENT_SECRET = "HmZl1vROOJ8qpCt5uD3nqCOzE9FysGdPVYeQjZ8rGvy6m1XOQilgp5RIAydSzFBr"
// const TOKEN_URL = "https://api.yelp.com/oauth2/token";
const TOKEN = "40EMoYvZAySgNng9dEqKYIDTYyWMpOZd7l2GgENfbQmPtqeE53fH4rm4NNM6cukEgvh_Jor42x9OE3-IsoBw4XcFMru3zT0_in9U0Rm2MGqKJJcOstCYV92qsDZ2WXYx";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

axios.defaults.headers.common['Authorization'] = TOKEN
console.log('AXIOS:', axios.defaults)
export function getToken() {
  return false
	// const request = axios.post(`${TOKEN_URL}`, {
	// 	grant_type: "client_credentials",
	// 	client_id: CLIENT_ID,
	// 	client_secret: CLIENT_SECRET,
	// })
	// .then(response => response.json())
 //  .then(json => store.dispatch(resolvedGetToken(json)))

}

export function resolvedGetToken(data) {
  return {
    type: GET_TOKEN,
    data: data
  }
}


export function fetchReviews() {
  // const request = 
  return axios.get(`${ROOT_URL}`)
  // .then(d => console.log('d',d))
  	.then(response => response.json())
    .then(json => store.dispatch(resolvedGetReviews(json)));
    // .then(json => console.log('JSON: ', json));
}

export function resolvedGetReviews(data) {
  console.log('TESTING2')
  return {
    type: FETCH_REVIEWS,
    data: data
  }

}
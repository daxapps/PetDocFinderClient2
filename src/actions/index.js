import axios from "axios";

export const FETCH_REVIEWS = "fetch_reviews";

const ROOT_URL = "https://api.yelp.com/v3/businesses/search";
const API_KEY = "?key=2Xp8K5kCnUIEYFKFfTokZQ";

export function fetchReviews() {
  const request = axios.get(`${ROOT_URL}${API_KEY}`);

  return {
    type: FETCH_REVIEWS,
    payload: request
  };
}
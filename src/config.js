// export const API_BASE_URL =
//     process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

module.exports = {
  PORT: process.env.PORT || 8080,
  // other stuff
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
    "https://pet-doc-finder-api.herokuapp.com/api"
};

exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
						'mongodb://localhost/test'; 
var Mongoose = require('mongoose').Mongoose;
var mongoose = new Mongoose();

var Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);

mongoose.Promise = global.Promise;

beforeAll(function(done) {
  console.log("c");
  mockgoose.prepareStorage().then(function() {
    console.log('1');
    mongoose.connect('mongodb://localhost/test', function(err) {
      console.log("2");
      done(err);
    });
  });
});

beforeEach((done) => {
  console.log("d");
  const {
    collections
  } = mongoose.connection;
  const collectionKeys = Object.keys(collections);
  let counter = 0;

  function check() {
    counter += 1;
    if (counter === collectionKeys.length) {
      done();
    }
    done();
  }

  collectionKeys.forEach((collection) => {
    mongoose.connection.db.dropCollection(collection, (err, result) => {
      check();
    });
  });
});

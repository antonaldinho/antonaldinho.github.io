
const mongoose = require('mongoose')

const connectionURL = 'mongodb+srv://@cluster0-buyml.azure.mongodb.net/test?retryWrites=true'

mongoose.connect( connectionURL, {
  user: "antonio",
  pass: encodeURIComponent('kazekage12!'),
  useNewUrlParser: true,
  useCreateIndex: true
}, function(error) {
  if(error) {
    console.log("err ----->", error);
  }
  else {
    console.log("woohoo");
  }
});
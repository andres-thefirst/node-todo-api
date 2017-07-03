const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection("Todos").findOneAndUpdate({_id: new  ObjectID("5959528d25b0a75e2da38355")}, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //
  // });

  db.collection("Users").findOneAndUpdate({name: "Andres"}, {
    $set: {
      name: "Noah"
    },
    $inc: {
      age: 1,
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  }, (err) => {

  });

  db.close();
});

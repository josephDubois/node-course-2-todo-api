// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to mongodb server.");
  }
  console.log('Connect to mongodb server.');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name: 'Logan'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({_id: new ObjectID('59047efdf743ae058ec10f07')}).then((result) => {
    console.log(result);
  });
  //db.close();
});

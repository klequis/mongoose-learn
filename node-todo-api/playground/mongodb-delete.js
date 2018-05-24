const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // })
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })
  db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    console.log(result);
  })
  // 5ace61b593f6cb43d8b7fa22
  db.collection('Users').findOneAndDelete({ _id: new ObjectID('5ace61b593f6cb43d8b7fa22') }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })
  //client.close();
})
